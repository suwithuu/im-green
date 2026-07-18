import { ChevronLeft, CircleHelp } from "lucide-react";

interface AppHeaderProps {
    title?: string;
    onBack?: () => void;
    showHelp?: boolean;
}

export default function AppHeader({
                                      title = "iMGreen",
                                      onBack,
                                      showHelp = false,
                                  }: AppHeaderProps) {
    return (
        <header className="sticky top-0 z-20 flex h-14 items-center border-b border-slate-100 bg-white px-4">
            <div className="flex w-10 justify-start">
                {onBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        aria-label="이전 화면으로 이동"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 active:bg-slate-100"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                )}
            </div>

            <h1 className="flex-1 text-center text-base font-bold text-slate-900">
                {title}
            </h1>

            <div className="flex w-10 justify-end">
                {showHelp && (
                    <button
                        type="button"
                        aria-label="도움말"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 active:bg-slate-100"
                    >
                        <CircleHelp className="h-5 w-5" />
                    </button>
                )}
            </div>
        </header>
    );
}