import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
    ssr: false,
});

type ReCaptchaProps = {
    onChange: (token: string | null) => void;
};

export default function ReCaptcha({ onChange }: ReCaptchaProps) {
    return (
        <>
            <ReCAPTCHA
                className="flex justify-center"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                onChange={onChange}
                size="compact"
            />
        </>
    );
}
