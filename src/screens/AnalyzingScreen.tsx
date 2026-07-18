import {
    Check,
    Circle,
    LoaderCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

interface AnalyzingScreenProps {
    onComplete: () => void;
}

const analysisSteps = [
    "등록한 자료를 확인하고 있습니다.",
    "설비 및 전력 정보를 추출하고 있습니다.",
    "예상 환경효과를 계산하고 있습니다.",
    "K-택소노미 기준과 비교하고 있습니다.",
];

export default function AnalyzingScreen({
                                            onComplete,
                                        }: AnalyzingScreenProps) {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep >= analysisSteps.length - 1) {
            const completeTimer = window.setTimeout(
                onComplete,
                1000,
            );

            return () => window.clearTimeout(completeTimer);
        }

        const timer = window.setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
        }, 900);

        return () => window.clearTimeout(timer);
    }, [currentStep, onComplete]);

    const progress =
        ((currentStep + 1) / analysisSteps.length) * 100;

    return (
        <section className="flex min-h-dvh flex-col bg-white px-6">
            <div className="flex flex-1 flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
                    <LoaderCircle className="h-12 w-12 animate-spin text-emerald-600" />
                </div>

                <h1 className="mt-8 text-center text-2xl font-bold leading-8 text-slate-900">
                    기업 자료를 분석하고
                    <br />
                    있습니다
                </h1>

                <p className="mt-3 min-h-12 text-center text-sm leading-6 text-slate-500">
                    {analysisSteps[currentStep]}
                </p>

                <div className="mt-8 w-full">
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="mt-2 text-right text-xs font-semibold text-emerald-700">
                        {Math.round(progress)}%
                    </p>
                </div>

                <div className="mt-8 w-full space-y-4 rounded-2xl bg-slate-50 p-5">
                    {analysisSteps.map((step, index) => {
                        const completed = index < currentStep;
                        const active = index === currentStep;

                        return (
                            <div
                                key={step}
                                className="flex items-center gap-3"
                            >
                                <div
                                    className={[
                                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                                        completed || active
                                            ? "bg-emerald-600 text-white"
                                            : "bg-slate-200 text-slate-400",
                                    ].join(" ")}
                                >
                                    {completed ? (
                                        <Check className="h-4 w-4" />
                                    ) : active ? (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Circle className="h-3 w-3" />
                                    )}
                                </div>

                                <span
                                    className={[
                                        "text-sm",
                                        completed || active
                                            ? "font-medium text-slate-800"
                                            : "text-slate-400",
                                    ].join(" ")}
                                >
                  {step}
                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}