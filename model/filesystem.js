let filesystem = [
    {
        rootDir: {
            dirName: "/",
            owner: "root",

            bin: {
                dirName: "bin",
                owner: "root",
                dirContains: "Installed packages aka programs",
            },

            boot: {
                dirName: "boot",
                owner: "root",

                efi: {
                    dirName: "EFI",
                    owner: "root",
                    dirContains: "UEFI boot loader",
                    dirDescribe:
                        "If system uses UEFI inseadt of BIOS, boot loader is here",

                    systemd: {
                        dirName: "systemd",
                        owner: "root",
                        dirContains: "The systemd bootloader lives here",
                        dirDescribe:
                            "Systemd is a boot loader, it allows the system to boot when you press the power button.",
                    },

                    grub: {
                        dirName: "grub",
                        owner: "root",
                        dirContains: "The grub boot loader lives here.",
                        dirDescribe:
                            "grub is a a lighter weight boot loader that allows the system to turn on when you press the power button.",
                    },
                },

                bios: {
                    dirName: "BIOS",
                    owner: "root",
                    dirContains: "BIOS boot loader",
                    dirDescribe:
                        "If system uses BIOS instead of UEFI, boot loader is here",
                    biosDescribe:
                        "BIOS is usually used on old systems, UEFI is prefered on newer systems.",
                },
            },

            dev: {
                dirName: "dev",
                owner: "root",
            },

            etc: {
                dirName: "etc",
                owner: "root",
            },

            lib: {
                dirName: "lib",
                owner: "root",
            },

            lib64: {
                dirName: "lib64",
                owner: "root",
            },

            mnt: {
                dirName: "mnt",
                owner: "root",
            },

            opt: {
                dirName: "opt",
                owner: "root",
            },

            proc: {
                dirName: "proc",
                owner: "root",
            },

            root: {
                dirName: "root",
                owner: "root",
            },

            run: {
                dirName: "run",
                owner: "root",
            },

            sbin: {
                dirName: "sbin",
                owner: "root",
            },

            srv: {
                dirName: "srv",
                owner: "root",
            },

            sys: {
                dirName: "sys",
                owner: "root",
            },

            tmp: {
                dirName: "tmp",
                owner: "root",
            },

            usr: {
                dirName: "usr",
                owner: "root",
            },

            vvar: {
                // obj name as vvar due to the var keyword in js
                dirName: "var",
                owner: "root",
            },

            home: {
                dirName: "home",
                owner: "root",

                userName: {
                    dirName: "userName",
                    owner: "username",

                    documents: {
                        dirName: "Document",
                        owner: "username",
                    },

                    downloads: {
                        dirName: "Downloads",
                        owner: "username",
                    },

                    music: {
                        dirName: "Music",
                        owner: "username",
                    },

                    videos: {
                        dirName: "Videos",
                        owner: "username",
                    },

                    pictures: {
                        dirName: "Pictures",
                        owner: "username",
                    },

                    publicDir: {
                        // obj name publicDir due to public keyword in js
                        dirName: "Public",
                        owner: "username",
                    },
                },
            },
        },
    },
];
