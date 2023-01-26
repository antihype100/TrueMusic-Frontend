export const addTrackDurationToFormData = (
    uploadTrackFile: File,
    setTrackDuration: (trackDuraton: number) => void,
    trackData: FormData,
) => {
    if (uploadTrackFile.name) {
        const url = URL.createObjectURL(uploadTrackFile);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.onloadedmetadata = function() {
            setTrackDuration(audio.duration);
            trackData.append('trackDuration', audio.duration.toString());
        };
    }
};