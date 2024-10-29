type Props = {
    src: string
    loop?: boolean
    muted?: boolean
};

export default function Audio({ src, loop = false, muted = false}: Props) {
    return (
        <audio autoPlay loop={loop} muted={muted}>
            <source src={src} type="audio/mp3" />
        </audio>
    );
}