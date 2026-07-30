'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  Users, Calendar, Activity, Sparkles, FileText, MessageSquare, 
  Search, CheckCircle2, ArrowRight, TrendingUp 
} from 'lucide-react';

const spring = { type: 'spring' as const, stiffness: 250, damping: 25 };

// Utility component for counting numbers up smoothly
function AnimatedCounter({ from = 0, to, duration = 1.2 }: { from?: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function DashboardContent({ activeIndex }: { activeIndex: number }) {
  return (
    <motion.div 
      layout
      transition={spring}
      className="flex h-full w-full flex-col gap-4 overflow-hidden p-6"
    >
      {/* Dynamic Header */}
      <motion.div layoutId="header" transition={spring} className="flex items-center justify-between pb-2 border-b border-gray-200/50">
        <div className="flex items-center gap-3">
          <motion.div layoutId="header-icon" transition={spring} className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] shadow-sm">
            {activeIndex === 0 && <Users className="h-5 w-5" />}
            {activeIndex === 1 && <Calendar className="h-5 w-5" />}
            {activeIndex === 2 && <Activity className="h-5 w-5" />}
            {activeIndex === 3 && <Sparkles className="h-5 w-5" />}
            {activeIndex === 4 && <FileText className="h-5 w-5" />}
            {activeIndex === 5 && <MessageSquare className="h-5 w-5" />}
          </motion.div>
          <motion.h2 layoutId="header-title" transition={spring} className="text-xl font-bold text-gray-900">
            {activeIndex === 0 && "Student Management"}
            {activeIndex === 1 && "Therapy Planner"}
            {activeIndex === 2 && "Attendance Analytics"}
            {activeIndex === 3 && "AI Assistant"}
            {activeIndex === 4 && "Reports"}
            {activeIndex === 5 && "Parent Portal"}
          </motion.h2>
        </div>
        <motion.div layoutId="header-action" transition={spring} className="flex h-9 items-center rounded-lg bg-white/60 border border-white/80 px-3 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-md">
          {activeIndex === 0 && <span className="flex items-center gap-2"><Search className="h-4 w-4" /> Search</span>}
          {activeIndex === 1 && <span>This Week</span>}
          {activeIndex === 2 && <span>Export CSV</span>}
          {activeIndex === 3 && <span className="text-[var(--color-secondary)]">Active</span>}
          {activeIndex === 4 && <span>Generate</span>}
          {activeIndex === 5 && <span>Filter</span>}
        </motion.div>
      </motion.div>

      {/* Dynamic Main Layout */}
      <div className="flex flex-1 gap-4 overflow-hidden mt-2">
        {/* Main Content Area */}
        <motion.div 
          layoutId="main-content" 
          transition={spring} 
          className="flex flex-1 flex-col gap-3 rounded-2xl bg-white/40 border border-white/60 p-4 shadow-sm backdrop-blur-sm"
        >
          {activeIndex === 0 && <StudentList />}
          {activeIndex === 1 && <CalendarView />}
          {activeIndex === 2 && <AnalyticsChart />}
          {activeIndex === 3 && <AIAssistant />}
          {activeIndex === 4 && <ReportList />}
          {activeIndex === 5 && <MessagesView />}
        </motion.div>

        {/* Sidebar / Secondary Content Area */}
        <motion.div 
          layoutId="side-content" 
          transition={spring} 
          className="hidden w-1/3 flex-col gap-3 rounded-2xl bg-white/40 border border-white/60 p-4 shadow-sm backdrop-blur-sm sm:flex"
        >
          {activeIndex === 0 && <StudentSideStats />}
          {activeIndex === 1 && <TherapySideStats />}
          {activeIndex === 2 && <AttendanceKPIs />}
          {activeIndex === 3 && <AIInsights />}
          {activeIndex === 4 && <ReportKPIs />}
          {activeIndex === 5 && <PortalNotifications />}
        </motion.div>
      </div>
    </motion.div>
  );
}

// -------------------------------------------------------------
// MODULE COMPONENTS (Using shared layoutIds for morphing)
// -------------------------------------------------------------

function StudentList() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <motion.div 
          key={i} 
          layoutId={`list-item-${i}`} 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: i * 0.08 }}
          className="flex items-center justify-between rounded-xl bg-white/60 p-3 hover:bg-white/80 border border-white/50 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <motion.div layoutId={`avatar-${i}`} transition={spring} className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] opacity-90 shadow-sm" />
            <div className="flex flex-col">
              <motion.div layoutId={`title-${i}`} transition={spring} className="h-4 w-32 rounded bg-gray-300 mb-1" />
              <motion.div layoutId={`subtitle-${i}`} transition={spring} className="h-3 w-20 rounded bg-gray-200" />
            </div>
          </div>
          <motion.div layoutId={`status-${i}`} transition={spring} className="h-6 w-16 rounded-full bg-green-100 border border-green-200 flex items-center justify-center shadow-sm">
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Present</span>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

function StudentSideStats() {
  return (
    <div className="flex flex-col h-full gap-4">
      <motion.div layoutId="stat-card-1" transition={spring} className="flex-1 rounded-xl bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/20 p-4 flex flex-col justify-center shadow-sm">
        <span className="text-xs text-[var(--color-secondary)] uppercase tracking-widest font-semibold mb-1">Total Students</span>
        <span className="text-3xl font-bold text-gray-900"><AnimatedCounter to={124} /></span>
      </motion.div>
      <motion.div layoutId="stat-card-2" transition={spring} className="flex-1 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 p-4 flex flex-col justify-center shadow-sm">
        <span className="text-xs text-[#e11d48] uppercase tracking-widest font-semibold mb-1">Attendance</span>
        <span className="text-3xl font-bold text-gray-900"><AnimatedCounter to={96} />%</span>
      </motion.div>
    </div>
  );
}

function CalendarView() {
  return (
    <div className="flex flex-col h-full gap-2">
      <div className="flex justify-between text-xs font-semibold text-gray-500 uppercase pb-2 border-b border-gray-200/60 px-2">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-2 pt-1">
        {[1, 2, 3, 4, 5].map((day) => (
          <div key={day} className="flex flex-col gap-2">
            {[1, 2].map((session, i) => (
              <motion.div 
                key={`${day}-${session}`} 
                layoutId={`list-item-${day === 1 ? session : (day===2 && session===1 ? 3 : (day===3 && session===2 ? 4 : day * 2 + session))}`} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...spring, delay: (day + i) * 0.05 }}
                className={`rounded-lg p-2 border shadow-sm ${session === 1 ? 'bg-[var(--color-secondary)]/10 border-[var(--color-secondary)]/30' : 'bg-[var(--color-primary)]/5 border-[var(--color-primary)]/20'}`}
              >
                <motion.div layoutId={`title-${day * 2 + session}`} transition={spring} className={`h-2 w-full rounded mb-1.5 ${session === 1 ? 'bg-[var(--color-secondary)]/30' : 'bg-[var(--color-primary)]/20'}`} />
                <motion.div layoutId={`subtitle-${day * 2 + session}`} transition={spring} className={`h-1.5 w-2/3 rounded ${session === 1 ? 'bg-[var(--color-secondary)]/20' : 'bg-[var(--color-primary)]/10'}`} />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TherapySideStats() {
  return (
    <div className="flex flex-col h-full gap-3">
      <motion.div layoutId="stat-card-1" transition={spring} className="h-1/3 rounded-xl bg-white/60 border border-gray-200/80 p-4 shadow-sm">
        <span className="text-xs text-[var(--color-secondary)] font-bold uppercase tracking-wide block mb-3">Next Session</span>
        <div className="flex items-center gap-3">
           <motion.div layoutId="avatar-1" transition={spring} className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] opacity-90 shadow-sm" />
           <div className="flex flex-col gap-1.5">
             <div className="h-2 w-16 rounded bg-gray-300" />
             <div className="h-1.5 w-10 rounded bg-gray-200" />
           </div>
        </div>
      </motion.div>
      <motion.div layoutId="stat-card-2" transition={spring} className="flex-1 rounded-xl bg-white/60 border border-gray-200/80 p-4 flex flex-col justify-end shadow-sm">
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-3">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "75%" }} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-[var(--color-secondary)] rounded-full shadow-sm" 
          />
        </div>
        <span className="text-xs font-semibold text-gray-600">Therapist Capacity (<AnimatedCounter to={75} />%)</span>
      </motion.div>
    </div>
  );
}

function AnalyticsChart() {
  return (
    <div className="flex flex-col h-full justify-end gap-3 pb-2 pt-6 px-4">
      <div className="flex items-end justify-between h-full gap-2">
        {[40, 70, 45, 90, 65, 85, 100, 60, 80].map((height, i) => (
          <motion.div 
            key={i} 
            layoutId={i < 4 ? `list-item-${i + 1}` : `bar-${i}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: i * 0.05 }}
            className="w-full rounded-t-md bg-gradient-to-t from-[var(--color-secondary)]/70 to-[var(--color-accent)]/80 shadow-sm" 
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between w-full border-t border-gray-200/80 pt-3 text-[10px] uppercase font-bold text-gray-500">
        <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
      </div>
    </div>
  );
}

function AttendanceKPIs() {
  return (
    <div className="flex flex-col h-full gap-4">
      <motion.div layoutId="stat-card-1" transition={spring} className="flex-1 rounded-xl bg-white/60 p-4 border border-white/80 flex items-center justify-center relative overflow-hidden shadow-sm">
        <TrendingUp className="absolute -right-4 -bottom-4 h-24 w-24 text-[var(--color-secondary)]/5" />
        <div className="text-center">
          <span className="text-4xl font-extrabold text-gray-900 block"><AnimatedCounter to={98} />%</span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 block">Avg Rate</span>
        </div>
      </motion.div>
      <motion.div layoutId="stat-card-2" transition={spring} className="flex-1 rounded-xl bg-white/60 p-4 border border-white/80 flex items-center justify-center shadow-sm">
         <div className="text-center">
          <span className="text-3xl font-extrabold text-[var(--color-secondary)] block">+<AnimatedCounter to={12} />%</span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 block">YoY Growth</span>
        </div>
      </motion.div>
    </div>
  );
}

function AIAssistant() {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="h-20 w-20 rounded-2xl bg-white/80 border border-white flex items-center justify-center shadow-[0_10px_40px_rgba(124,74,237,0.15)] backdrop-blur-xl mb-6 relative"
        >
          <Sparkles className="h-10 w-10 text-[var(--color-secondary)]" />
          <motion.div 
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border-2 border-[var(--color-secondary)]/30"
          />
        </motion.div>
        <motion.div layoutId="title-1" transition={spring} className="h-4 w-48 rounded bg-gray-300 mb-4" />
        <motion.div layoutId="subtitle-1" transition={spring} className="h-2 w-64 rounded bg-gray-200" />
      </div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-[var(--color-secondary)] rounded-full shadow-[0_0_8px_rgba(124,74,237,0.5)]"
          animate={{ 
            y: [-10, -120], 
            x: Math.sin(i) * 30,
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: i * 0.3 }}
          style={{ bottom: 20, left: '50%', marginLeft: (i - 3.5) * 25 }}
        />
      ))}
    </div>
  );
}

function AIInsights() {
  return (
    <div className="flex flex-col h-full gap-3">
      {[1, 2, 3].map((i) => (
        <motion.div 
          key={i} 
          layoutId={`list-item-${i}`} 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: i * 0.1 }}
          className="flex-1 rounded-xl bg-gradient-to-r from-[var(--color-secondary)]/5 to-[var(--color-accent)]/5 border border-[var(--color-secondary)]/20 p-4 flex flex-col justify-center shadow-sm"
        >
           <div className="flex items-center gap-2 mb-3">
             <Sparkles className="h-3 w-3 text-[var(--color-secondary)]" />
             <span className="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-bold">Insight {i}</span>
           </div>
           <motion.div layoutId={`subtitle-${i}`} transition={spring} className="h-2 w-full rounded bg-gray-300 mb-2" />
           <motion.div layoutId={`title-${i}`} transition={spring} className="h-1.5 w-2/3 rounded bg-gray-200" />
        </motion.div>
      ))}
    </div>
  );
}

function ReportList() {
  return (
    <div className="flex flex-col h-full gap-3 justify-center">
       {[1, 2, 3, 4].map((i) => (
        <motion.div 
          key={i} 
          layoutId={`list-item-${i}`} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: i * 0.08 }}
          className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-white/80 hover:bg-white/90 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
              <FileText className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex flex-col">
              <motion.div layoutId={`title-${i}`} transition={spring} className="h-3 w-32 rounded bg-gray-300 mb-2" />
              <motion.div layoutId={`subtitle-${i}`} transition={spring} className="h-2 w-16 rounded bg-gray-200" />
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </motion.div>
      ))}
    </div>
  );
}

function ReportKPIs() {
  return (
    <div className="flex flex-col h-full gap-4">
      <motion.div layoutId="stat-card-1" transition={spring} className="flex-1 rounded-xl bg-blue-50 p-5 flex flex-col justify-between border border-blue-100 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wide text-blue-600">Monthly Reviews</span>
        <span className="text-4xl font-extrabold text-blue-900"><AnimatedCounter to={45} /></span>
      </motion.div>
      <motion.div layoutId="stat-card-2" transition={spring} className="flex-1 rounded-xl bg-green-50 p-5 flex flex-col justify-between border border-green-100 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wide text-green-600">Compliance</span>
        <span className="text-4xl font-extrabold text-green-900"><AnimatedCounter to={100} />%</span>
      </motion.div>
    </div>
  );
}

function MessagesView() {
  return (
    <div className="flex flex-col h-full gap-4 justify-end p-2 pb-4">
       {[1, 2].map((i) => (
        <motion.div 
          key={i} 
          layoutId={`list-item-${i}`} 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: i * 0.1 }}
          className="self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-white/80 border border-white shadow-sm p-4"
        >
          <motion.div layoutId={`title-${i}`} transition={spring} className="h-2 w-32 rounded bg-gray-300 mb-3" />
          <motion.div layoutId={`subtitle-${i}`} transition={spring} className="h-2 w-24 rounded bg-gray-200" />
        </motion.div>
      ))}
      <motion.div 
        layoutId="list-item-3" 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0.3 }}
        className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] p-4 shadow-[0_8px_16px_rgba(124,74,237,0.2)]"
      >
          <motion.div layoutId="title-3" transition={spring} className="h-2 w-40 rounded bg-white/40 mb-3" />
          <motion.div layoutId="subtitle-3" transition={spring} className="h-2 w-20 rounded bg-white/30" />
      </motion.div>
    </div>
  );
}

function PortalNotifications() {
  return (
    <div className="flex flex-col h-full gap-4">
      <motion.div layoutId="stat-card-1" transition={spring} className="flex-1 rounded-xl bg-white/60 border border-white/80 p-5 flex flex-col items-center justify-center shadow-sm">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mb-4 border border-green-200"
        >
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        </motion.div>
        <span className="text-base font-bold text-gray-900">All Caught Up</span>
      </motion.div>
      <motion.div layoutId="stat-card-2" transition={spring} className="rounded-xl bg-white/60 border border-white/80 p-5 relative overflow-hidden shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Next Meeting</span>
        <span className="text-xl font-extrabold text-gray-900 block mt-2">Oct 14, 2:00 PM</span>
      </motion.div>
    </div>
  );
}
