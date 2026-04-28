import { ArrowRight, TrendingUp, TrendingDown, AlertCircle, Users, Settings, Monitor, Puzzle, Sparkles, Brain, Zap, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function App() {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const margin = 20;
    const lineHeight = 6;
    let y = margin;

    // Title
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235); // blue
    doc.text('Improving Program Workflow & User Experience', margin, y);
    y += lineHeight;
    doc.text('in Youth Services', margin, y);
    y += lineHeight + 2;

    doc.setFontSize(12);
    doc.setTextColor(147, 51, 234); // purple
    doc.text('A Human-Centered Systems Case Study', margin, y);
    y += lineHeight + 6;

    // Author info
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('Macy Arias', margin, y);
    y += lineHeight;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Youth Service Director', margin, y);
    y += lineHeight - 1;
    doc.text('Focus: UX, Workflow Optimization, Operations', margin, y);
    y += lineHeight + 5;

    // Overview
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Overview', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text('Role: Youth Service Director', margin, y);
    y += lineHeight - 1;
    doc.text('Organization: YMCA of South Alabama', margin, y);
    y += lineHeight - 1;
    doc.text('Timeline: March 2025 - March 2026', margin, y);
    y += lineHeight - 1;
    doc.text('Tools: Google Workspace, internal systems, communication tools', margin, y);
    y += lineHeight + 3;

    const summaryText = 'Redesigned workflows and user-facing systems in a high-volume youth program environment to improve efficiency, communication, and overall user experience.';
    const splitSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(splitSummary, margin, y);
    y += (splitSummary.length * (lineHeight - 1)) + 5;

    // The Problem
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('The Problem', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const problems = [
      'Inefficient group transitions',
      'Parent communication gaps',
      'Manual reporting systems',
      'Limited system visibility',
      'Staff coordination challenges'
    ];
    problems.forEach(problem => {
      doc.text('• ' + problem, margin + 5, y);
      y += lineHeight - 1;
    });
    y += 5;

    // User Journey
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('User Journey', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(220, 38, 38); // red
    doc.text('Before:', margin, y);
    y += lineHeight;
    doc.setTextColor(0, 0, 0);
    doc.text('Sign-Up → Confusion → Repeated Questions → Frustration', margin + 5, y);
    y += lineHeight + 2;
    doc.setTextColor(22, 163, 74); // green
    doc.text('After:', margin, y);
    y += lineHeight;
    doc.setTextColor(0, 0, 0);
    doc.text('Sign-Up → Clear Updates → Structured Experience → Confidence', margin + 5, y);
    y += lineHeight + 5;

    // Workflow Improvement
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Workflow Improvement', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(220, 38, 38);
    doc.text('Before:', margin, y);
    y += lineHeight;
    doc.setTextColor(0, 0, 0);
    doc.text('• Unstructured transitions', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Staff confusion', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Delays', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Inconsistent schedules', margin + 5, y);
    y += lineHeight + 2;
    doc.setTextColor(22, 163, 74);
    doc.text('After:', margin, y);
    y += lineHeight;
    doc.setTextColor(0, 0, 0);
    doc.text('• Structured group flow', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Defined staff roles', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Efficient transitions', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Standardized schedules', margin + 5, y);
    y += lineHeight + 5;

    // New page for solutions
    doc.addPage();
    y = margin;

    // Solutions
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Solutions', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(10);
    doc.setTextColor(22, 163, 74);
    doc.text('Workflow Design', margin, y);
    y += lineHeight;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text('• Structured movement systems', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Standardized schedules', margin + 5, y);
    y += lineHeight + 2;
    doc.setFontSize(10);
    doc.setTextColor(37, 99, 235);
    doc.text('User Experience', margin, y);
    y += lineHeight;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text('• Weekly parent updates', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Clear expectations', margin + 5, y);
    y += lineHeight + 2;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Systems & Processes', margin, y);
    y += lineHeight;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text('• Streamlined reporting', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Organized documentation', margin + 5, y);
    y += lineHeight + 2;
    doc.setFontSize(10);
    doc.setTextColor(147, 51, 234);
    doc.text('Technology', margin, y);
    y += lineHeight;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    doc.text('• Digital check-in/out', margin + 5, y);
    y += lineHeight - 1;
    doc.text('• Inventory tracking', margin + 5, y);
    y += lineHeight + 5;

    // Impact
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Impact', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const impacts = [
      'Increased program participation',
      'Reduced inefficiencies',
      'Improved communication clarity',
      'Better staff coordination',
      'Revenue growth with controlled costs'
    ];
    impacts.forEach(impact => {
      doc.text('• ' + impact, margin + 5, y);
      y += lineHeight - 1;
    });
    y += 5;

    // AI Integration
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Future Opportunities: AI-Enhanced Systems', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);

    const aiItems = [
      { title: 'Predictive Staffing', desc: 'AI could analyze attendance trends to predict staffing needs, improving efficiency and reducing over/understaffing.' },
      { title: 'Automated Communication', desc: 'AI-powered messaging systems could send personalized updates, reminders, and alerts to parents.' },
      { title: 'Intelligent Scheduling', desc: 'AI could optimize activity schedules based on group size, staff availability, and facility usage.' },
      { title: 'Incident Pattern Detection', desc: 'AI could analyze behavior and incident reports to identify trends and proactively improve safety.' },
      { title: 'Resource Optimization', desc: 'AI systems could track inventory usage and predict future needs, reducing waste.' }
    ];

    aiItems.forEach((item, index) => {
      if (y > 250) {
        doc.addPage();
        y = margin;
      }
      doc.setFont(undefined, 'bold');
      doc.text(`${index + 1}. ${item.title}`, margin, y);
      y += lineHeight;
      doc.setFont(undefined, 'normal');
      const splitDesc = doc.splitTextToSize(item.desc, 170);
      doc.text(splitDesc, margin + 5, y);
      y += (splitDesc.length * (lineHeight - 1)) + 3;
    });

    // Reflection
    if (y > 230) {
      doc.addPage();
      y = margin;
    }
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text('Reflection', margin, y);
    y += lineHeight + 1;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const reflection1 = 'This experience showed me how deeply system design impacts both user experience and operational success. I found myself consistently identifying inefficiencies and redesigning workflows to better support both staff and users.';
    const splitReflection1 = doc.splitTextToSize(reflection1, 170);
    doc.text(splitReflection1, margin, y);
    y += (splitReflection1.length * (lineHeight - 1)) + 3;

    const reflection2 = 'This is what led me to pursue Human-Centered AI—combining my interest in systems and problem-solving with a focus on designing technology that is intuitive, efficient, and genuinely helpful in real-world environments.';
    const splitReflection2 = doc.splitTextToSize(reflection2, 170);
    doc.text(splitReflection2, margin, y);

    doc.save('Macy_Arias_YMCA_Case_Study.pdf');
  };

  return (
    <div className="size-full overflow-y-auto bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20" id="portfolio-content">

        {/* SECTION 1: HERO */}
        <section className="mb-32 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"></div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-5 py-2 rounded-full text-sm mb-8 border border-blue-200 shadow-md hover:shadow-lg hover:scale-105 transition-all">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Case Study</span>
          </div>

          <h1 className="text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform">
            Improving Program Workflow & User Experience in Youth Services
          </h1>

          <p className="text-3xl text-slate-600 mb-10 font-light">
            A Human-Centered Systems Case Study
          </p>

          <div className="inline-flex flex-col items-center justify-center text-slate-700 bg-gradient-to-br from-slate-50 to-slate-100 px-8 py-6 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-center">
              <p className="text-xl text-slate-800 mb-3">Macy Arias</p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-3 mx-auto"></div>
              <p className="text-slate-500">Youth Service Director</p>
              <p className="text-sm text-blue-600 mt-1 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Focus: UX, Workflow Optimization, Operations
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: OVERVIEW */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl mb-10 text-slate-800 flex items-center justify-center gap-3">
            Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 space-y-6 shadow-lg text-left">
              <div>
                <p className="text-blue-600 text-sm mb-1">Role</p>
                <p className="text-slate-800 text-lg">Youth Service Director</p>
              </div>
              <div>
                <p className="text-blue-600 text-sm mb-1">Organization</p>
                <p className="text-slate-800 text-lg">YMCA of South Alabama</p>
              </div>
              <div>
                <p className="text-blue-600 text-sm mb-1">Timeline</p>
                <p className="text-slate-800 text-lg">March 2025 - March 2026</p>
              </div>
              <div>
                <p className="text-blue-600 text-sm mb-1">Tools</p>
                <p className="text-slate-600">Google Workspace, internal systems, communication tools</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8 flex items-center shadow-lg">
              <p className="text-slate-700 leading-relaxed text-lg">
                Redesigned workflows and user-facing systems in a high-volume youth program environment to improve efficiency, communication, and overall user experience.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE PROBLEM */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl mb-10 text-slate-800">
            The Problem
          </h2>
          <div className="max-w-5xl mx-auto space-y-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Inefficient group transitions',
                'Parent communication gaps',
                'Manual reporting systems'
              ].map((problem, index) => (
                <div key={index} className="group bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    </div>
                    <p className="text-slate-700">{problem}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                'Limited system visibility',
                'Staff coordination challenges'
              ].map((problem, index) => (
                <div key={index} className="group bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    </div>
                    <p className="text-slate-700">{problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: USER JOURNEY */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl mb-10 text-slate-800">
            User Journey
          </h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="bg-red-100 px-4 py-1 rounded-full">
                  <p className="text-sm text-red-700">Before</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-white px-6 py-4 rounded-xl border border-red-200 shadow-md">
                  <p className="text-slate-800">Sign-Up</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-500" />
                <div className="bg-white px-6 py-4 rounded-xl border border-red-200 shadow-md">
                  <p className="text-slate-800">Confusion</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-500" />
                <div className="bg-white px-6 py-4 rounded-xl border border-red-200 shadow-md">
                  <p className="text-slate-800">Repeated Questions</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-500" />
                <div className="bg-white px-6 py-4 rounded-xl border border-red-200 shadow-md">
                  <p className="text-slate-800">Frustration</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="bg-green-100 px-4 py-1 rounded-full">
                  <p className="text-sm text-green-700">After</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-white px-6 py-4 rounded-xl border border-green-200 shadow-md hover:scale-105 transition-transform">
                  <p className="text-slate-800">Sign-Up</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-600" />
                <div className="bg-white px-6 py-4 rounded-xl border border-green-200 shadow-md hover:scale-105 transition-transform">
                  <p className="text-slate-800">Clear Updates</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-600" />
                <div className="bg-white px-6 py-4 rounded-xl border border-green-200 shadow-md hover:scale-105 transition-transform">
                  <p className="text-slate-800">Structured Experience</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-600" />
                <div className="bg-white px-6 py-4 rounded-xl border border-green-200 shadow-md hover:scale-105 transition-transform">
                  <p className="text-slate-800">Confidence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WORKFLOW IMPROVEMENT */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl mb-10 text-slate-800">
            Workflow Improvement
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-8 rounded-xl shadow-lg text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-2xl text-red-700">Before</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Unstructured transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Staff confusion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Inconsistent schedules</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-xl shadow-lg text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-2xl text-green-700">After</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Structured group flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Defined staff roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Efficient transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-200 p-1 rounded mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">Standardized schedules</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: SOLUTIONS */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl mb-10 text-slate-800">
            Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-200 transition-colors">
                  <Puzzle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl text-slate-800">Workflow Design</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-left">
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Structured movement systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>Standardized schedules</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl text-slate-800">User Experience</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-left">
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Weekly parent updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Clear expectations</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-slate-200 transition-colors">
                  <Settings className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="text-2xl text-slate-800">Systems & Processes</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-left">
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-slate-600 mt-1 flex-shrink-0" />
                  <span>Streamlined reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-slate-600 mt-1 flex-shrink-0" />
                  <span>Organized documentation</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl group-hover:bg-purple-200 transition-colors">
                  <Monitor className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl text-slate-800">Technology</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-left">
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Digital check-in/out</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Inventory tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: IMPACT */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl mb-10 text-slate-800">
            Impact
          </h2>
          <div className="bg-gradient-to-tr from-red-50 to-green-50 border border-green-200 p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <ul className="space-y-6">
              <li className="flex items-start gap-5 text-left">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingUp className="w-7 h-7 text-green-600 flex-shrink-0" />
                </div>
                <span className="text-2xl text-slate-700">Increased program participation</span>
              </li>
              <li className="flex items-start gap-5 text-left">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingDown className="w-7 h-7 text-green-600 flex-shrink-0" />
                </div>
                <span className="text-2xl text-slate-700">Reduced inefficiencies</span>
              </li>
              <li className="flex items-start gap-5 text-left">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingUp className="w-7 h-7 text-green-600 flex-shrink-0" />
                </div>
                <span className="text-2xl text-slate-700">Improved communication clarity</span>
              </li>
              <li className="flex items-start gap-5 text-left">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingUp className="w-7 h-7 text-green-600 flex-shrink-0" />
                </div>
                <span className="text-2xl text-slate-700">Better staff coordination</span>
              </li>
              <li className="flex items-start gap-5 text-left">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TrendingUp className="w-7 h-7 text-green-600 flex-shrink-0" />
                </div>
                <span className="text-2xl text-slate-700">Revenue growth with controlled costs</span>
              </li>
            </ul>
          </div>
        </section>

        {/* AI INTEGRATION SECTION */}
        <section className="mb-32 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-2xl shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl text-slate-800">AI Integration</h2>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-10 mb-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-3xl text-slate-800 mb-2">Future Opportunities</h3>
            <p className="text-cyan-700 text-xl">AI-Enhanced Systems</p>
          </div>

          <div className="space-y-5 max-w-3xl mx-auto">
            <div className="group bg-white border border-cyan-200 p-7 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-102 text-left">
              <h4 className="text-xl mb-3 flex items-center gap-3 text-slate-800">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                </div>
                1. Predictive Staffing
              </h4>
              <p className="text-slate-600 pl-11">
                AI could analyze attendance trends to predict staffing needs, improving efficiency and reducing over/understaffing.
              </p>
            </div>

            <div className="group bg-white border border-cyan-200 p-7 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-102 text-left">
              <h4 className="text-xl mb-3 flex items-center gap-3 text-slate-800">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                </div>
                2. Automated Communication
              </h4>
              <p className="text-slate-600 pl-11">
                AI-powered messaging systems could send personalized updates, reminders, and alerts to parents, reducing manual workload and improving consistency.
              </p>
            </div>

            <div className="group bg-white border border-cyan-200 p-7 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-102 text-left">
              <h4 className="text-xl mb-3 flex items-center gap-3 text-slate-800">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                </div>
                3. Intelligent Scheduling
              </h4>
              <p className="text-slate-600 pl-11">
                AI could optimize activity schedules based on group size, staff availability, and facility usage.
              </p>
            </div>

            <div className="group bg-white border border-cyan-200 p-7 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-102 text-left">
              <h4 className="text-xl mb-3 flex items-center gap-3 text-slate-800">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                </div>
                4. Incident Pattern Detection
              </h4>
              <p className="text-slate-600 pl-11">
                AI could analyze behavior and incident reports to identify trends and proactively improve safety and program design.
              </p>
            </div>

            <div className="group bg-white border border-cyan-200 p-7 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-102 text-left">
              <h4 className="text-xl mb-3 flex items-center gap-3 text-slate-800">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                </div>
                5. Resource Optimization
              </h4>
              <p className="text-slate-600 pl-11">
                AI systems could track inventory usage and predict future needs, reducing waste and improving planning.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL SECTION: REFLECTION */}
        <section className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-2xl shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl text-slate-800">Reflection</h2>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg text-left">
              <p>
                This experience showed me how deeply system design impacts both user experience and operational success. I found myself consistently identifying inefficiencies and redesigning workflows to better support both staff and users.
              </p>
              <p>
                This is what led me to pursue <span className="text-purple-700 font-medium">Human-Centered AI</span>—combining my interest in systems and problem-solving with a focus on designing technology that is intuitive, efficient, and genuinely helpful in real-world environments.
              </p>
            </div>
          </div>
        </section>

        {/* DOWNLOAD BUTTON */}
        <div className="mb-20 text-center">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}