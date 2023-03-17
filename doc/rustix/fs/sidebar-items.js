window.SIDEBAR_ITEMS = {"constant":[["NFS_SUPER_MAGIC","The filesystem magic number for NFS."],["PROC_SUPER_MAGIC","The filesystem magic number for procfs."],["UTIME_NOW","`UTIME_NOW` for use with `utimensat`."],["UTIME_OMIT","`UTIME_OMIT` for use with `utimensat`."]],"enum":[["Advice","`POSIX_FADV_*` constants for use with `fadvise`."],["FileType","`S_IF*` constants. `S_IF*` constants for use with `mknodat` and `Stat`’s `st_mode` field."],["FlockOperation","`LOCK_*` constants for use with `flock`"]],"fn":[["accessat","`faccessat(dirfd, path, access, flags)`—Tests permissions for a file or directory."],["bind_mount","`mount(source, target, null, MS_BIND, null)`"],["change_mount","`mount(null, target, null, mountflags, null)`"],["chmodat","`fchmodat(dirfd, path, mode, 0)`—Sets file or directory permissions."],["chownat","`fchownat(dirfd, path, owner, group, flags)`—Sets file or directory ownership."],["copy_file_range","`copy_file_range(fd_in, off_in, fd_out, off_out, len, 0)`—Copies data from one file to another."],["cwd","`AT_FDCWD`—Returns a handle representing the current working directory."],["fadvise","`posix_fadvise(fd, offset, len, advice)`—Declares an expected access pattern for a file."],["fallocate","`fallocate(fd, mode, offset, len)`—Adjusts file allocation."],["fchmod","`fchmod(fd)`—Sets open file or directory permissions."],["fchown","`fchown(fd)`—Sets open file or directory ownership."],["fcntl_add_seals","`fcntl(fd, F_ADD_SEALS)`"],["fcntl_dupfd_cloexec","`fcntl(fd, F_DUPFD_CLOEXEC)`—Creates a new `OwnedFd` instance, with value at least `min`, that has `O_CLOEXEC` set and that shares the same underlying [file description] as `fd`."],["fcntl_get_seals","`fcntl(fd, F_GET_SEALS)`"],["fcntl_getfd","`fcntl(fd, F_GETFD)`—Returns a file descriptor’s flags."],["fcntl_getfl","`fcntl(fd, F_GETFL)`—Returns a file descriptor’s access mode and status."],["fcntl_setfd","`fcntl(fd, F_SETFD, flags)`—Sets a file descriptor’s flags."],["fcntl_setfl","`fcntl(fd, F_SETFL, flags)`—Sets a file descriptor’s status."],["fdatasync","`fdatasync(fd)`—Ensures that file data is written to the underlying storage device."],["flock","`flock(fd, operation)`—Acquire or release an advisory lock on an open file."],["fstat","`fstat(fd)`—Queries metadata for an open file or directory."],["fstatfs","`fstatfs(fd)`—Queries filesystem statistics for an open file or directory."],["fstatvfs","`fstatvfs(fd)`—Queries filesystem statistics for an open file or directory, POSIX version."],["fsync","`fsync(fd)`—Ensures that file data and metadata is written to the underlying storage device."],["ftruncate","`ftruncate(fd, length)`—Sets the length of a file."],["futimens","`futimens(fd, times)`—Sets timestamps for an open file or directory."],["is_file_read_write","`fcntl(fd, F_GETFL) & O_ACCMODE`"],["linkat","`linkat(old_dirfd, old_path, new_dirfd, new_path, flags)`—Creates a hard link."],["major","`major(dev)`"],["makedev","`makedev(maj, min)`"],["memfd_create","`memfd_create(path, flags)`"],["minor","`minor(dev)`"],["mkdirat","`mkdirat(fd, path, mode)`—Creates a directory."],["mknodat","`mknodat(dirfd, path, mode, dev)`—Creates special or normal files."],["mount","`mount(source, target, filesystemtype, mountflags, data)`"],["move_mount","`mount(source, target, null, MS_MOVE, null)`"],["openat","`openat(dirfd, path, oflags, mode)`—Opens a file."],["openat2","`openat2(dirfd, path, OpenHow { oflags, mode, resolve }, sizeof(OpenHow))`"],["readlinkat","`readlinkat(fd, path)`—Reads the contents of a symlink."],["recursive_bind_mount","`mount(source, target, null, MS_BIND | MS_REC, null)`"],["remount","`mount(null, target, null, MS_REMOUNT | mountflags, data)`"],["renameat","`renameat(old_dirfd, old_path, new_dirfd, new_path)`—Renames a file or directory."],["renameat_with","`renameat2(old_dirfd, old_path, new_dirfd, new_path, flags)`—Renames a file or directory."],["seek","`lseek(fd, offset, whence)`—Repositions a file descriptor within a file."],["sendfile","`sendfile(out_fd, in_fd, offset, count)`"],["statat","`fstatat(dirfd, path, flags)`—Queries metadata for a file or directory."],["statfs","`statfs`—Queries filesystem metadata."],["statvfs","`statvfs`—Queries filesystem metadata, POSIX version."],["statx","`statx(dirfd, path, flags, mask, statxbuf)`"],["symlinkat","`symlinkat(old_path, new_dirfd, new_path)`—Creates a symlink."],["tell","`lseek(fd, 0, SEEK_CUR)`—Returns the current position within a file."],["unlinkat","`unlinkat(fd, path, flags)`—Unlinks a file or remove a directory."],["utimensat","`utimensat(dirfd, path, times, flags)`—Sets file or directory timestamps."]],"struct":[["Access","`*_OK` constants for use with `accessat`."],["AtFlags","`AT_*` constants for use with `openat`, `statat`, and other `*at` functions."],["Dir","`DIR*`"],["DirEntry","`struct dirent`"],["FallocateFlags","`FALLOC_FL_*` constants for use with `fallocate`."],["FdFlags","`FD_*` constants for use with `fcntl_getfd` and `fcntl_setfd`."],["MemfdFlags","`MFD_*` constants for use with `memfd_create`."],["Mode","`S_I*` constants for use with `openat`, `chmodat`, and `fchmod`."],["MountFlags","`MS_*` constants for use with [`mount`][crate::fs::mount]."],["MountPropagationFlags","`MS_*` constants for use with [`change_mount`][crate::fs::mount::change_mount]."],["OFlags","`O_*` constants for use with `openat`."],["RawDir","A directory iterator implemented with getdents."],["RawDirEntry","A raw directory entry, similar to `std::fs::DirEntry`."],["RenameFlags","`RENAME_*` constants for use with `renameat_with`."],["ResolveFlags","`RESOLVE_*` constants for use with `openat2`."],["SealFlags","`F_SEAL_*` constants for use with `fcntl_add_seals` and `fcntl_get_seals`."],["StatVfs","`struct statvfs` for use with `statvfs` and `fstatvfs`."],["StatVfsMountFlags","`ST_*` constants for use with [`StatVfs`]."],["StatxFlags","`STATX_*` constants for use with `statx`."],["Timestamps","Timestamps used by `utimensat` and `futimens`."]],"trait":[["DirEntryExt","Re-export types common to POSIX-ish platforms. Unix-specific extension methods for [`fs::DirEntry`]."],["FileExt","Re-export types common to POSIX-ish platforms. Unix-specific extensions to [`fs::File`]."],["FileTypeExt","Re-export types common to POSIX-ish platforms. Unix-specific extensions for [`fs::FileType`]."],["MetadataExt","Re-export types common to POSIX-ish platforms. Unix-specific extensions to [`fs::Metadata`]."],["OpenOptionsExt","Re-export types common to POSIX-ish platforms. Unix-specific extensions to [`fs::OpenOptions`]."]],"type":[["Dev","`dev_t`"],["FsWord","`__fsword_t`"],["Nsecs","A type for the `tv_nsec` field of [`Timespec`]."],["RawMode","`mode_t`"],["Secs","A type for the `tv_sec` field of [`Timespec`]."],["Stat","`struct stat` for use with `statat` and `fstat`."],["StatFs","`struct statfs` for use with `statfs` and `fstatfs`."],["Statx","`struct statx` for use with `statx`."],["StatxTimestamp","`struct statx_timestamp` for use with [`Statx`]."],["Timespec","`struct timespec`"]]};