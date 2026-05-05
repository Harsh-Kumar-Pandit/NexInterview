import { useUser } from "@clerk/react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";
import "./Welcome.css";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();
  return (
    <section className="ws">
      <div className="ws-inner">
        <div className="ws-left">
          <div className="ws-icon"><SparklesIcon size={20} /></div>
          <div>
            <h1 className="ws-title">Welcome back, {user?.firstName || "there"}!</h1>
            <p className="ws-sub">Ready to level up your coding skills?</p>
          </div>
        </div>
        <button className="ws-btn" onClick={onCreateSession}>
          <ZapIcon size={14} />
          Create Session
          <ArrowRightIcon size={14} />
        </button>
      </div>
    </section>
  );
}

export default WelcomeSection;