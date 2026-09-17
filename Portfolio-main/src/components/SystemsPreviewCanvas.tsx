import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Database, 
  Cloud, 
  Workflow, 
  Layers, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  GitBranch
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface SystemDemo {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: React.ElementType;
  accentColor: string;
  accentGradient: string;
  problemSolved: string;
  architectureNodes: {
    label: string;
    sublabel: string;
    type: 'input' | 'process' | 'storage' | 'output';
  }[];
  stack: string[];
  linkId: string;
}

const SYSTEMS_DATA: SystemDemo[] = [
  {
    id: 'mdm-dcr',
    title: 'Agentic MDM DCR Automation',
    category: 'Agentic AI & Healthcare MDM',
    badge: 'Production AI',
    icon: Bot,
    accentColor: '#8B5CF6',
    accentGradient: 'from-violet-500 to-indigo-600',
    problemSolved: 'Automates healthcare provider Master Data Management change requests with graph-based, evidence-backed decisioning and human review.',
    architectureNodes: [
      { label: 'DCR Request', sublabel: 'Account / Address Change', type: 'input' },
      { label: 'LangGraph Orchestrator', sublabel: 'Conditional Routing', type: 'process' },
      { label: 'Snowflake + Web Evidence', sublabel: 'Similarity Scoring', type: 'storage' },
      { label: 'Human-in-the-Loop', sublabel: 'Reviewed Decision', type: 'output' },
    ],
    stack: ['LangGraph', 'Azure OpenAI', 'Snowflake', 'MCP', 'FastAPI'],
    linkId: 'mdm-dcr-automation'
  },
  {
    id: 'ai-insights',
    title: 'AI Insights: Text-to-SQL Analytics',
    category: 'Agentic AI & Analytics',
    badge: 'Intelligent Analytics',
    icon: Cloud,
    accentColor: '#0EA5E9',
    accentGradient: 'from-sky-500 to-blue-600',
    problemSolved: 'Converts natural-language questions into optimized SQL queries and live, context-aware visualizations from enterprise databases.',
    architectureNodes: [
      { label: 'User Question', sublabel: 'Natural Language', type: 'input' },
      { label: 'Agentic Router', sublabel: 'Interpretation & Routing', type: 'process' },
      { label: 'Text-to-SQL Engine', sublabel: 'Optimized Query Gen', type: 'storage' },
      { label: 'Dynamic Chart', sublabel: 'Context-Aware Visual', type: 'output' },
    ],
    stack: ['Python', 'Text-to-SQL', 'Agentic AI', 'Cortex Agent'],
    linkId: 'ai-insights'
  },
  {
    id: 'cloud-data',
    title: 'Bleubird: AceETL Platform',
    category: 'Data Engineering & Pipelines',
    badge: 'Automated Pipelines',
    icon: Workflow,
    accentColor: '#10B981',
    accentGradient: 'from-emerald-500 to-teal-600',
    problemSolved: 'Ingests multi-source data batches from AWS S3, SFTP, and MySQL, executing automated transformations into Snowflake and Dremio.',
    architectureNodes: [
      { label: 'S3 / SFTP / MySQL', sublabel: 'Airbyte Ingestion', type: 'input' },
      { label: 'Prefect Orchestration', sublabel: 'Scheduled DAGs', type: 'process' },
      { label: 'Snowflake & Dremio', sublabel: 'Data Lake Storage', type: 'storage' },
      { label: 'LLM Log Analysis', sublabel: 'Root-Cause Summaries', type: 'output' },
    ],
    stack: ['Prefect', 'Airbyte', 'Snowflake', 'AWS S3', 'Dremio', 'Keycloak'],
    linkId: 'ace-etl-bleubird'
  },
  {
    id: 'pharma-analytics',
    title: 'Leo Pharma HCP Segmentation',
    category: 'Healthcare Analytics & BI',
    badge: 'Pharma BI',
    icon: Database,
    accentColor: '#06B6D4',
    accentGradient: 'from-cyan-500 to-teal-600',
    problemSolved: 'Models 100+ pharmaceutical tables and 50M+ records into governed Power BI reporting for HCP prescriber targeting.',
    architectureNodes: [
      { label: 'Pharma Source Tables', sublabel: '100+ Tables', type: 'input' },
      { label: 'Star/Snowflake Schema', sublabel: 'Data Modeling', type: 'process' },
      { label: 'DAX Measures', sublabel: 'KPI Logic', type: 'storage' },
      { label: 'Power BI Service', sublabel: 'Row-Level Security', type: 'output' },
    ],
    stack: ['Power BI', 'DAX', 'SQL', 'Row-Level Security'],
    linkId: 'leo-pharma-hcp'
  },
  {
    id: 'aceai-chatbot',
    title: 'AceAI: RAG & Graph RAG Chatbot',
    category: 'AI & Document Search',
    badge: 'Production AI',
    icon: Eye,
    accentColor: '#F59E0B',
    accentGradient: 'from-amber-500 to-rose-600',
    problemSolved: 'Transforms enterprise and clinical documents into high-precision natural language answers using hybrid RAG and Graph RAG retrieval.',
    architectureNodes: [
      { label: 'PDF / DOCX / CSV', sublabel: 'Multi-Format Ingestion', type: 'input' },
      { label: 'Semantic Chunking', sublabel: 'Embedding Generation', type: 'process' },
      { label: 'RAG + Graph RAG', sublabel: 'Hybrid Retrieval', type: 'storage' },
      { label: 'n8n + Django API', sublabel: 'Streamed Answer', type: 'output' },
    ],
    stack: ['RAG', 'Graph RAG', 'Hugging Face', 'Django', 'AWS EC2', 'n8n'],
    linkId: 'aceai-chatbot'
  }
];

export const SystemsPreviewCanvas: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState<string>('rag-ai');

  const activeSystem = SYSTEMS_DATA.find(s => s.id === activeSystemId) || SYSTEMS_DATA[0];
  const IconComponent = activeSystem.icon;

  return (
    <div className="w-full rounded-3xl apple-glass shimmer-border p-5 sm:p-7 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Top Bar / Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
            Architecture in Action
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Click tabs to inspect system flow
        </span>
      </div>

      {/* Tab Navigation Strip */}
      <div className="flex flex-wrap gap-2">
        {SYSTEMS_DATA.map((sys) => {
          const TabIcon = sys.icon;
          const isActive = sys.id === activeSystemId;

          return (
            <button
              key={sys.id}
              onClick={() => {
                soundManager.playPop();
                setActiveSystemId(sys.id);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-accent-violet to-accent-indigo text-white font-semibold shadow-lg shadow-accent-violet/25 scale-[1.02]'
                  : 'glass-subtle text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span className="truncate">{sys.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Active System Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSystem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="space-y-5"
        >
          {/* Header Info */}
          <div className="p-4 rounded-2xl glass-subtle space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                  style={{ backgroundColor: activeSystem.accentColor }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-display text-white">
                    {activeSystem.title}
                  </h3>
                  <div className="text-[11px] font-mono text-accent-teal">
                    {activeSystem.category}
                  </div>
                </div>
              </div>

              <NavLink
                to={`/projects#${activeSystem.linkId}`}
                onClick={() => soundManager.playPop()}
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-accent-teal hover:text-white transition-colors"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
              {activeSystem.problemSolved}
            </p>
          </div>

          {/* Interactive Architecture Flow Nodes */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-semibold">
              <GitBranch className="w-3 h-3 text-accent-cyan" /> Execution Pipeline
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {activeSystem.architectureNodes.map((node, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl apple-glass border-white/10 hover:border-white/20 transition-all space-y-1 relative group card-3d"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Node 0{idx + 1}</span>
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: activeSystem.accentColor }}
                    />
                  </div>
                  <div className="text-xs font-bold text-white truncate">
                    {node.label}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {node.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {activeSystem.stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-lg glass-subtle text-[10px] font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <NavLink
              to={`/projects#${activeSystem.linkId}`}
              onClick={() => soundManager.playPop()}
              className="sm:hidden inline-flex items-center gap-1 text-xs font-mono text-accent-teal"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
