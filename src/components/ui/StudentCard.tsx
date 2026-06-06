import type { Student } from "@/types/student";

type StudentCardProps = {
  student: Student;
  index: number;
  active: boolean;
  onClick: () => void;
};

export function StudentCard({ student, index, active, onClick }: StudentCardProps) {
  return (
    <div onClick={onClick} className="w-[200px] shrink-0 cursor-pointer select-none">
      <div
        className="bg-neutral-900 px-3 pb-10 pt-3 transition-all duration-300"
        style={{
          transform: `rotate(${index % 2 === 0 ? -1.5 : 1.2}deg) scale(${active ? 1.04 : 1})`,
          border: active ? `1px solid ${student.hue}55` : "1px solid rgba(255,255,255,0.06)",
          boxShadow: active
            ? `0 24px 60px rgba(0,0,0,0.8), 0 0 0 1px ${student.hue}22`
            : "0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex h-[220px] flex-col items-center justify-center gap-2.5 mb-6" style={{ background: `${student.hue}18` }}>
          <div
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
            style={{ background: `${student.hue}33`, border: `1px solid ${student.hue}55` }}
          >
            <span className="font-sans text-[15px] font-medium" style={{ color: student.hue }}>
              {student.initials}
            </span>
          </div>
          <span className="font-sans text-[9px] uppercase tracking-[0.1em] text-white/25">photo</span>
        </div>
        <p className="mt-3.5 text-center font-display text-sm font-medium text-white">{student.name}</p>
        <p className="mt-1 text-center font-sans text-[10px] leading-relaxed text-white/35">{student.uni}</p>
      </div>
    </div>
  );
}
