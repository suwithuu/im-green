// src/screens/IntroScreen.tsx

import { Leaf, FileSearch, Clock3 } from "lucide-react";

interface IntroScreenProps {
    onNext: () => void;
}

export default function IntroScreen({ onNext }: IntroScreenProps) {
    return (
        <section className="flex min-h-dvh flex-col bg-white">
        <header className="flex h-14 items-center justify-center border-b border-slate-100">
        <strong className="text-lg text-emerald-700">iM:Green</strong>
            </header>

            <div className="flex flex-1 flex-col px-5 pb-28 pt-10">
    <div className="mb-8 flex h-28 w-28 items-center justify-center self-center rounded-full bg-emerald-50">
    <Leaf className="h-14 w-14 text-emerald-600" />
        </div>

        <h1 className="text-center text-2xl font-bold leading-9 text-slate-900">
        우리 기업의 녹색활동을
    <br />
    간편하게 진단해 보세요
    </h1>

    <p className="mt-4 text-center text-[15px] leading-6 text-slate-500">
        고지서와 설비자료를 등록하면
    <br />
    K-택소노미 적합 가능성과 예상 환경효과를 확인할 수 있습니다.
    </p>

    <div className="mt-9 rounded-2xl bg-slate-50 p-4">
    <div className="flex items-center gap-3">
    <FileSearch className="h-5 w-5 text-emerald-600" />
    <div>
        <p className="text-sm font-semibold text-slate-800">
        문서 기반 간편 진단
    </p>
    <p className="mt-1 text-xs text-slate-500">
        실제 자료를 활용해 진단 과정을 체험합니다.
    </p>
    </div>
    </div>

    <div className="my-4 h-px bg-slate-200" />

    <div className="flex items-center gap-3">
    <Clock3 className="h-5 w-5 text-emerald-600" />
    <div>
        <p className="text-sm font-semibold text-slate-800">
        예상 소요시간
    </p>
    <p className="mt-1 text-xs text-slate-500">약 3분</p>
    </div>
    </div>
    </div>
    </div>

    <div className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] border-t border-slate-100 bg-white p-5 pb-[calc(20px+env(safe-area-inset-bottom))]">
    <button
        type="button"
    onClick={onNext}
    className="h-14 w-full rounded-2xl bg-emerald-600 text-base font-semibold text-white active:bg-emerald-700"
        >
        녹색활동 진단 시작
    </button>
    </div>
    </section>
);
}