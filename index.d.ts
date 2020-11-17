interface DownloadOptions {
    url?: string,
    m3u8?: string
}

interface hlsDlI {
    hsDl: {
        download: (options: DownloadOptions) => Promise<Blob>,
        downloadToFile: (options: DownloadOptions, filename: string) => Promise<void>
    }
}

declare const hlsDl: hlsDlI

export = hlsDl
