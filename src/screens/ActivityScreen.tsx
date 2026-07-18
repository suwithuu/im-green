import {
    Factory,
    Recycle,
    SolarPanel,
    Wrench,
} from "lucide-react";
import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import AppHeader from "../components/AppHeader";
import BottomButton from "../components/BottomButton";
import ProgressBar from "../components/ProgressBar";

interface ActivityScreenProps {
    onBack: () => void;
    onNext: () => void;
}

export default function ActivityScreen({
                                           onBack,
                                           onNext,
                                       }: ActivityScreenProps) {
    const [selected, setSelected] = useState(false);

    return (
        <section className="min-h-dvh bg-slate-50 pb-28">
            <AppHeader onBack={onBack} showHelp />
            <ProgressBar current={1} total={4} />

            <div className="px-5 pt-7">
                <h2 className="text-2xl font-bold leading-8 text-slate-900">
                    어떤 녹색활동을
                    <br />
                    진단할까요?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                    현재 추진하거나 준비 중인 기업 활동을 선택해 주세요.
                </p>

                <div className="mt-7 space-y-3">
                    <ActivityCard
                        title="고효율 설비 교체"
                        description="노후 생산설비를 에너지 효율이 높은 신규 설비로 교체합니다."
                        metadata="필요자료 4개 · 약 3분"
                        icon={Wrench}
                        selected={selected}
                        onClick={() => setSelected(true)}
                    />

                    <ActivityCard
                        title="신재생에너지 도입"
                        description="태양광 등 재생에너지 설비 도입 활동을 진단합니다."
                        icon={SolarPanel}
                        disabled
                    />

                    <ActivityCard
                        title="친환경 원자재 전환"
                        description="생산에 사용하는 원자재의 친환경 전환 활동을 진단합니다."
                        icon={Factory}
                        disabled
                    />

                    <ActivityCard
                        title="폐기물 재활용"
                        description="폐기물 감축과 재활용 활동을 진단합니다."
                        icon={Recycle}
                        disabled
                    />
                </div>
            </div>

            <BottomButton
                label="다음"
                onClick={onNext}
                disabled={!selected}
            />
        </section>
    );
}