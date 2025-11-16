
export const portfolioProjects = [
  
  {
    id: "p1",
    title: "Enterprise RAG on top of AWS",
    description: "A fully automated enterprise RAG pipeline on AWS — upload, embed, store, and query documents with S3, Bedrock, Lambda, RDS and EC2.",
    image: {
      gradient: "from-cyan-500 to-blue-600",
      label: "",
      thumbnail: "project-thumbnail/RAG-ON-AWS.svg",
    },
    summary:
      "An enterprise-grade RAG platform on AWS where documents uploaded to S3 are embedded via Bedrock, stored in RDS with Lambda, and queried seamlessly through a Streamlit app hosted on EC2.",
    tags: ["RAG", "AWS"],
    link: "#",
    loom: "https://www.loom.com/share/7122c94879f94b84b42325e330912dca?sid=e7fe68ff-f4a2-4cb2-8126-6c9f5ddd4c7a",
  },

  {
    id: "p2",
    title: "Mini Hugging Face - Finetuning Platform as a Service",
    description: "A Finetuning Platform as a Service to finetune LLMs on your own data.",
    image: {
      gradient: "from-yellow-500 to-amber-600",
      label: "",
      thumbnail: "project-thumbnail/Mini-HuggingFace.svg",
    },
    summary:
      "Mini Hugging Face–style fine-tuning service powered by AWS, combining S3, Lambda, EventBridge, and SageMaker for automated training and endpoint deployment, with a simple Streamlit interface hosted on EC2 for users.",
    tags: ["AWS", "Hugging Face", "PaaS"],
    link: "#",
    loom: "https://www.loom.com/share/90c349e36dbc4f9093de970c2f8e2089?sid=5054ee3c-63dd-45be-90c6-e5f8ce2db019",
  },
  
  {
    id: "p3",
    title: "Real-Time AI Voice Assistant for Healthcare on top of AWS",
    description: "An intelligent voice agent that lets patients talk to healthcare systems in real time.",
    image: {
      gradient: "",
      label: "",
      thumbnail: "project-thumbnail/VoiceBot.svg",
    },
    summary:
      "A stateless microservice architecture that processes text through an LLM service and streams the generated response to a TTS service for real-time audio output. The system delivers ultra-low latency with a 17 ms TTFT and 50+ tokens/sec throughput. Deployed on AWS, it scales horizontally and supports seamless multi-user interactions.",
    tags: ["VoiceBot", "Healthcare ", "TensorRT"],
    link: "#",
    loom: "https://www.loom.com/share/d72bcc95ffab4c219027bf6ea11cd6f0",
  },
  

  {
    id: "p4",
    title: "Smart AI Research Assistant",
    description: "Smart AI research assistant powered by OpenAI multi-tool function calling and Supabase.",
    image: {
      gradient: "from-red-500 to-rose-600",
      label: "",
      thumbnail: "project-thumbnail/AI-Research-Assistance.svg",
    },
    summary:
      "AI Research Assistant that leverages OpenAI function calling with Supabase to combine RAG, web search, analytics, and charting into one powerful multi-tool for intelligent research.",
    tags: ["AI Research Assistant", "Open Function Calling", "Supabase"],
    link: "#",
    loom: "https://www.loom.com/share/1b03c4821adf486e8d6c9e7b08c29a03?sid=e68e9ad2-0671-4a03-b968-c86b04ca268b",
  },
  
  
  {
    id: "p5",
    title: "Radiology Multimodel Finetuning",
    description: "AI tool for analyzing radiology images and generating instant medical insights.",
    image: {
      gradient: "from-gray-700 to-gray-900",
      label: "",
      // Add thumbnail
      thumbnail: "project-thumbnail/MM-Finetuning.svg",
    },
    summary:
      "Finetuned a Multimodel LLM LLAMA-VISION to diagnose the XRAY images and give response as a radiologist.",
    tags: ["LLAMA", "Finetuned", "Multimodel"],
    link: "#",
    loom: "https://www.loom.com/share/b83940fe6bea45a89bd5d50f5e34ae12?sid=d7c96a50-8dc2-4b40-8e63-1578a8c7b3a2",
  },
  {
    id: "p6",
    title: "Retina Blood Vessel Segmentation",
    description: "Retina Blood Vessel Segmentation Using UNET In Pytorch",
    image: {
      gradient: "",
      label: "",
      thumbnail: "project-thumbnail/retina.svg",
    },
    summary:
      "A deep learning solution built with U-Net in PyTorch to accurately segment blood vessels in retinal images, aiding in early diagnosis of eye diseases.",
    tags: ["Healthcare", "UNET", "Pytorch", "FastAPI"],
    link: "#",
    loom: "https://www.loom.com/share/1bf6cf4dd8e74a58af8db4cbd9ec0e11?sid=7306df77-69f8-4b23-9b71-aff23d5aa5ca",
  },
  {
    id: "p7",
    title: "Finetune LLM on Chat Dataset",
    description: "Finetuned language model trained on chat-based dataset for better conversational understanding.",
    image: {
      gradient: "",
      label: "",
      thumbnail: "project-thumbnail/Finetuned-Chatdataset.svg",
    },
    summary:
      "A custom finetuned model optimized on chat data to improve response quality, contextual relevance, and user interaction in conversational AI applications.",
    tags: ["Finetune", "Open Source LLM", "Chat Dataset"],
    link: "#",
    loom: "https://www.loom.com/share/445f448abf3a4142afc8e2eae0bdad91?sid=e2d9ab30-908c-43ca-8180-ddd6a7fb589b",
  },

  {
    id: "p8",
    title: "RAG Based ChatGPT For Enterprises built on top of Azure",
    description: "ChatGPT For Enterprises for internal usecases using RAG built on top of Azure.",
    image: {
      gradient: "",
      label: "",
      thumbnail: "project-thumbnail/amot.svg",
    },
    summary:
      "A secure, enterprise-grade ChatGPT solution deployed via Azure App Service—designed for internal use cases like knowledge retrieval, chat history, user authentication and user feedback.",
    tags: ["RAG", "AZURE ", "Agents"],
    link: "#",
    loom: "https://www.loom.com/share/c34ecc6cc4024a76a485e12dfded3d91?sid=f320f71b-9d6f-4843-96b0-8b0c11e848e2",
  },
];
