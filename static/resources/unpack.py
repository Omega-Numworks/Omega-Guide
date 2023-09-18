#!/bin/env python3

import struct
import sys


def read(fo, fw):
    l = struct.calcsize(fo)
    return struct.unpack(fo, fw.read(l))


def read_header(fw):
    magik, = read("5s", fw)

    if (magik != b"DfuSe"):
        return False, "Invalid magik number!", 0, 0

    version, = read("B", fw)

    if (version != 1):
        return False, "Unsupported file version!", 0, 0

    imagesize, = read("<I", fw)
    imagecount, = read("B", fw)

    return True, "OK!", imagecount, imagesize


def read_target(fw):
    magik, = read("6s", fw)

    if(magik != b"Target"):
        return False, "Invalid magik number!", "", 0, 0

    alternate, = read("B", fw)
    named, = read("<I", fw)
    name, = read("255s", fw)
    name = name.split(b'\0', 1)[0].decode("utf-8") if named != 0 else ""
    size, = read("<I", fw)
    elements, = read("<I", fw)

    return True, "OK!", name, size, elements


def read_element(fw):
    address, = read("<I", fw)
    size, = read("<I", fw)
    data, = read(str(size) + "s", fw)
    return address, size, data


def unpack(fw):
    internal_size = 64 * 1024
    internal_addr = 0x8000000
    internal = bytearray([255] * internal_size)

    external_size = 8 * 1024 * 1024
    external_addr = 0x90000000
    external = bytearray([255] * external_size)

    ok, message, count, size = read_header(fw)

    if not ok:
        raise Exception("Error reading header: " + message)

    print("Found", count, "image(s), total size:", size)

    for i in range(count):
        ok, message, name, size, elements = read_target(fw)

        if not ok:
            raise Exception("Error reading image:", message)

        print("  Image", i)
        print("    Found", elements, "element(s), total size:", size)

        for j in range(elements):
            addr, size, data = read_element(fw)

            if (addr >= internal_addr and addr + size <= internal_addr + internal_size):
                print("      Element", j, ": Address:", hex(addr), "Size:", hex(size), "<internal>")
                for k in range(size):
                    internal[k + addr - internal_addr] = data[k]
            elif (addr >= external_addr and addr + size <= external_addr + external_size):
                print("      Element", j, ": Address:", hex(addr), "Size:", hex(size), "<external>")
                for k in range(size):
                    external[k + addr - external_addr] = data[k]
            else:
                print("      Element", j, ": Address:", hex(addr), "Size:", hex(size), "<unknown>")
    return internal, external

with open("18-2-0.dfu", "rb") as f:
    internal, external = unpack(f)

    with open("internal.bin", "wb") as fi:
        fi.write(internal)
    with open("external.bin", "wb") as fe:
        fe.write(external)
