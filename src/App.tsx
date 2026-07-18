// src/App.tsx

import { useState } from "react";
import type { Screen, UploadedDocuments } from "./types";

import IntroScreen from "./screens/IntroScreen";
import ActivityScreen from "./screens/ActivityScreen";
import UploadScreen from "./screens/UploadScreen";
import AnalyzingScreen from "./screens/AnalyzingScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ResultScreen from "./screens/ResultScreen";

const initialDocuments: UploadedDocuments = {
  electricityBill: null,
  currentEquipment: null,
  newEquipmentQuote: null,
  disposalPlan: null,
};

function App() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [documents, setDocuments] =
      useState<UploadedDocuments>(initialDocuments);

  const registerSampleDocuments = () => {
    setDocuments({
      electricityBill: "2026_전기고지서.pdf",
      currentEquipment: "기존_공기압축기_명판.jpg",
      newEquipmentQuote: "고효율압축기_견적서.pdf",
      disposalPlan: null,
    });
  };

  const resetDemo = () => {
    setDocuments(initialDocuments);
    setScreen("intro");
  };

  return (
      <main className="mx-auto min-h-dvh max-w-[430px] bg-slate-50">
        {screen === "intro" && (
            <IntroScreen onNext={() => setScreen("activity")} />
        )}

        {screen === "activity" && (
            <ActivityScreen
                onBack={() => setScreen("intro")}
                onNext={() => setScreen("upload")}
            />
        )}

        {screen === "upload" && (
            <UploadScreen
                documents={documents}
                setDocuments={setDocuments}
                onRegisterSamples={registerSampleDocuments}
                onBack={() => setScreen("activity")}
                onNext={() => setScreen("analyzing")}
            />
        )}

        {screen === "analyzing" && (
            <AnalyzingScreen onComplete={() => setScreen("review")} />
        )}

        {screen === "review" && (
            <ReviewScreen
                onBack={() => setScreen("upload")}
                onNext={() => setScreen("result")}
            />
        )}

        {screen === "result" && (
            <ResultScreen
                onAddDocument={() => setScreen("upload")}
                onReset={resetDemo}
            />
        )}
      </main>
  );
}

export default App;