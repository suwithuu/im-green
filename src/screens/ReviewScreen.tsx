import {
    ChevronDown,
    Edit3,
    Leaf,
    Lightbulb,
    WalletCards,
    Zap,
} from "lucide-react";
import { useState } from "react";
import AppHeader from "../components/AppHeader";
import BottomButton from "../components/BottomButton";
import ProgressBar from "../components/ProgressBar";
import { extractedData } from "../data/mockData";

interface ReviewScreenProps {
    onBack: () => void;
    onNext: () => void;
}

interface ReviewSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function ReviewSection({
                           title,
                           children,
                           defaultOpen = false,
                       }: ReviewSectionProps) {
    const [open, setOpen] = useState(defaultOpen);



    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-4 py-4 text-left"
            >
        <span className="font-semibold text-slate-900">
          {title}
        </span>

                <ChevronDown
                    className={[
                        "h-5 w-5 text-slate-400 transition-transform",
                        open ? "rotate-180" : "",
                    ].join(" ")}
                />
            </button>

            {open && (
                <div className="border-t border-slate-100 px-4 py-4">
                    {children}
                </div>
            )}
        </section>
    );
}

interface DataRowProps {
    label: string;
    value: string;
}

function DataRow({ label, value }: DataRowProps) {
    return (
        <div className="flex items-center justify-between gap-4 py-2">
            <span className="text-sm text-slate-500">{label}</span>

            <div className="flex items-center gap-2">
                <strong className="text-right text-sm font-semibold text-slate-900">
                    {value}
                </strong>

                <button
                    type="button"
                    aria-label={`${label} 수정`}
                    className="text-slate-400"
                >
                    <Edit3 className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

export default function ReviewScreen({
                                         onBack,
                                         onNext,
                                     }: ReviewScreenProps) {
    const handleDiagnosis = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });

        onNext();
    };

    return (
        <section className="min-h-dvh bg-slate-50 pb-32">
            <AppHeader onBack={onBack} showHelp />
            <ProgressBar current={3} total={4} />

            <div className="px-5 pt-7">
                <h2 className="text-2xl font-bold leading-8 text-slate-900">
                    추출된 정보를
                    <br />
                    확인해 주세요
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                    등록한 문서에서 확인된 샘플 정보입니다.
                </p>

                <div className="mt-6 space-y-3">
                    <ReviewSection
                        title="전기 사용정보"
                        defaultOpen
                    >
                        <DataRow
                            label="연간 전력사용량"
                            value={extractedData.electricity.annualUsage}
                        />
                        <DataRow
                            label="연간 전기요금"
                            value={extractedData.electricity.annualCost}
                        />
                        <DataRow
                            label="계약전력"
                            value={extractedData.electricity.contractPower}
                        />
                    </ReviewSection>

                    <ReviewSection title="기존 설비 정보">
                        <DataRow
                            label="설비명"
                            value={extractedData.currentEquipment.name}
                        />
                        <DataRow
                            label="모델명"
                            value={extractedData.currentEquipment.model}
                        />
                        <DataRow
                            label="정격전력"
                            value={
                                extractedData.currentEquipment.ratedPower
                            }
                        />
                        <DataRow
                            label="제조연도"
                            value={
                                extractedData.currentEquipment.manufacturedYear
                            }
                        />
                    </ReviewSection>

                    <ReviewSection title="신규 설비 정보">
                        <DataRow
                            label="모델명"
                            value={extractedData.newEquipment.model}
                        />
                        <DataRow
                            label="정격전력"
                            value={extractedData.newEquipment.ratedPower}
                        />
                        <DataRow
                            label="예상 절감률"
                            value={
                                extractedData.newEquipment.reductionRate
                            }
                        />
                        <DataRow
                            label="도입비용"
                            value={extractedData.newEquipment.cost}
                        />
                    </ReviewSection>
                </div>

                <div className="mt-8">
                    <div className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-emerald-600" />
                        <h3 className="font-bold text-slate-900">
                            예상 환경효과
                        </h3>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <Zap className="h-5 w-5 text-emerald-600" />
                            <p className="mt-4 text-xl font-bold text-slate-900">
                                {extractedData.impact.electricitySaved}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                연간 전력 절감
                            </p>
                        </div>

                        <div className="rounded-2xl bg-cyan-50 p-4">
                            <Lightbulb className="h-5 w-5 text-cyan-600" />
                            <p className="mt-4 text-xl font-bold text-slate-900">
                                {extractedData.impact.carbonReduced}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                연간 탄소 감축
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <WalletCards className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500">
                                연간 예상 비용 절감
                            </p>
                            <p className="mt-1 text-lg font-bold text-slate-900">
                                약 {extractedData.impact.costSaved}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="mt-5 text-xs leading-5 text-slate-400">
                    표시된 값은 프로토타입용 샘플 데이터이며 실제
                    산출 결과가 아닙니다.
                </p>
            </div>

            <BottomButton
                label="이 정보로 진단"
                onClick={handleDiagnosis}
                secondaryLabel="이전"
                onSecondaryClick={onBack}
            />
        </section>
    );
}