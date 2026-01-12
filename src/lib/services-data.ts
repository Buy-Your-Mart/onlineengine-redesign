import {
  Monitor,
  Target,
  ShoppingCart,
  Megaphone,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  gradient: string;
  description: string;
  features: string[];
  stats: ServiceStat[];
  longContent: {
    overview: string;
    whyItMatters: string;
    ourApproach: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export const services: Service[] = [
  {
    id: "web-development",
    icon: Monitor,
    title: "Web Development",
    tagline: "Build Digital Experiences That Convert",
    gradient: "from-[#ff2d2d] to-[#ff6b35]",
    description:
      "High-performance, custom-built websites that turn visitors into loyal customers with seamless UX/UI. We craft digital experiences that not only look stunning but drive real business results.",
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions (Shopify, WooCommerce)",
      "Progressive Web Apps (PWA)",
      "Landing Page Optimization",
      "Website Speed Optimization",
      "Responsive Mobile-First Design",
      "CMS Integration & Management",
      "Website Maintenance & Support",
    ],
    stats: [
      { value: "500+", label: "Websites Delivered" },
      { value: "3x", label: "Avg. Conversion Lift" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
    longContent: {
      overview: "Your website is the digital storefront of your brand. In today's competitive market, a high-quality website is essential. At ONLINENGINE, we build performance-driven digital platforms that serve as the foundation of your online growth.",
      whyItMatters: "First impressions are formed in seconds. We ensure your website works in your favor by combining strategic design with reliable engineering.",
      ourApproach: "We build with purpose. Our process begins with understanding your business goals and customer behavior, followed by prototyping and performance optimization.",
      sections: [
        {
          title: "User-Centric Design",
          content: "Every element on your site is placed to guide users toward a desired action. We use data to optimize layouts for engagement and ease of use."
        },
        {
          title: "Scalable Infrastructure",
          content: "Our websites are built on modern frameworks that ensure reliability and fast load speeds for all your visitors."
        }
      ]
    }
  },
  {
    id: "digital-marketing",
    icon: Target,
    title: "Digital Marketing",
    tagline: "Data-Driven Strategies for Sustainable Growth",
    gradient: "from-[#ff6b35] to-[#f7c531]",
    description:
      "Strategic growth across digital channels to amplify your brand's presence. We combine creativity with analytics to deliver campaigns that perform consistently.",
    features: [
      "Digital Marketing Strategy",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Content Marketing",
      "Conversion Rate Optimization",
      "Performance Analytics",
    ],
    stats: [
      { value: "10M+", label: "Ad Spend Managed" },
      { value: "4.2x", label: "Avg. ROAS" },
      { value: "85%", label: "Client Retention" },
    ],
    longContent: {
      overview: "Digital marketing is about relevance. We help brands navigate the digital landscape with strategic plans that deliver measurable results.",
      whyItMatters: "Effective marketing requires precision. We target your audience accurately to ensure your message reaches the right people.",
      ourApproach: "We take a comprehensive view of your digital presence. By integrating multiple channels, we create a unified strategy that drives growth.",
      sections: [
        {
          title: "Full-Funnel Strategy",
          content: "We optimize the entire customer journey, from awareness to conversion and retention."
        },
        {
          title: "Informed Decisions",
          content: "Our strategies are backed by data. We use analytics to optimize your campaigns, ensuring efficient use of your marketing budget."
        }
      ]
    }
  },
  {
    id: "amazon-marketing",
    icon: ShoppingCart,
    title: "Amazon Marketing",
    tagline: "Maximize Your Amazon Potential",
    gradient: "from-[#f7c531] to-[#00c9a7]",
    description:
      "Comprehensive Amazon growth solutions from listing optimization to PPC management. We help you establish and grow your presence on Amazon India.",
    features: [
      "Amazon Account Management",
      "Product Listing Optimization",
      "Amazon PPC Management",
      "A+ Content & Storefronts",
      "Amazon Brand Registry",
      "Inventory Management",
      "Review Management",
      "Competitor Research",
    ],
    stats: [
      { value: "2500+", label: "Accounts Managed" },
      { value: "150%", label: "Avg. Sales Growth" },
      { value: "6500+", label: "Sellers Trained" },
    ],
    longContent: {
      overview: "Amazon is a complex marketplace. As specialists, we know how to navigate its systems to improve your product visibility and sales.",
      whyItMatters: "Visibility is key on Amazon. We provide the expertise needed to stand out in a crowded marketplace through strategic advertising and optimization.",
      ourApproach: "Our Amazon strategy focuses on visibility and conversion. We optimize your listings and manage your ads to drive better business outcomes.",
      sections: [
        {
          title: "Strategic SEO",
          content: "We optimize your listings for Amazon search, helping your products appear for relevant search terms that lead to sales."
        },
        {
          title: "PPC Optimization",
          content: "Our team manages your ad spend carefully, focusing on improving your efficiency and scaling your sales volume."
        }
      ]
    }
  },
  {
    id: "content-strategy",
    icon: Megaphone,
    title: "Content Strategy",
    tagline: "Clear Communication That Drives Results",
    gradient: "from-[#00c9a7] to-[#845ef7]",
    description:
      "Engaging content that connects with your audience and builds trust. We create strategic content that supports your brand's goals and customer relationships.",
    features: [
      "Content Strategy Planning",
      "Professional Writing Services",
      "Video Content Production",
      "Visual Design",
      "Case Studies",
      "Educational Content",
      "Social Media Content",
      "Content Distribution",
    ],
    stats: [
      { value: "1000+", label: "Content Pieces" },
      { value: "5x", label: "Engagement Boost" },
      { value: "60%", label: "Organic Traffic Growth" },
    ],
    longContent: {
      overview: "Content is a vital link between your brand and your customers. We produce content that is informative, engaging, and aligned with your goals.",
      whyItMatters: "Good content supports all your marketing efforts. We ensure your brand message is clear and reaches your audience effectively.",
      ourApproach: "We start with research and planning to create a content roadmap that reflects your brand's voice and objectives.",
      sections: [
        {
          title: "Effective Storytelling",
          content: "We craft content that connects with your audience, helping to build long-term relationships and brand awareness."
        },
        {
          title: "Strategic Distribution",
          content: "We plan how your content is shared to ensure it reaches the right audience on the platforms they use."
        }
      ]
    }
  },
  {
    id: "performance-ads",
    icon: TrendingUp,
    title: "Performance Ads",
    tagline: "Result-Oriented Advertising",
    gradient: "from-[#845ef7] to-[#ff2d2d]",
    description:
      "Focused advertising campaigns across Google, Meta, and other platforms. Every campaign is tracked and optimized to deliver the best possible value.",
    features: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "YouTube Ads",
      "Display Advertising",
      "Retargeting",
      "A/B Testing",
      "Conversion Tracking",
    ],
    stats: [
      { value: "50Cr+", label: "Ad Spend Managed" },
      { value: "3.8x", label: "Avg. ROAS" },
      { value: "40%", label: "Cost Reduction" },
    ],
    longContent: {
      overview: "Performance advertising focuses on efficiency. We manage your ad spend with care, aiming to maximize the return on your investment.",
      whyItMatters: "Digital advertising should be an investment. We provide the expertise to manage your campaigns effectively and reduce wasted spend.",
      ourApproach: "We rely on testing and optimization. By analyzing different ad versions, we identify what works best to lower your acquisition costs.",
      sections: [
        {
          title: "Focused Targeting",
          content: "We use data to show your ads to the people most likely to be interested in your products or services."
        },
        {
          title: "Continuous Optimization",
          content: "We monitor and adjust your campaigns regularly to respond to market changes and improve performance."
        }
      ]
    }
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media Management",
    tagline: "Engage Your Community Effectively",
    gradient: "from-[#ff2d2d] to-[#845ef7]",
    description:
      "Strategic social media management to build an authentic presence. We help you engage with your audience and grow your brand's community.",
    features: [
      "Social Media Strategy",
      "Community Management",
      "Influencer Outreach",
      "Social Advertising",
      "Content Planning",
      "Brand Monitoring",
      "Social Listening",
      "Monthly Reporting",
    ],
    stats: [
      { value: "100+", label: "Brands Managed" },
      { value: "10M+", label: "Followers Grown" },
      { value: "200%", label: "Engagement Increase" },
    ],
    longContent: {
      overview: "Social media reflects your brand's personality. We help you build a presence that is professional, engaging, and consistent.",
      whyItMatters: "Your customers are active on social media. Engaging them there helps keep your brand relevant and connected to your audience.",
      ourApproach: "We focus on participation and engagement. Our strategies are designed to build relationships and foster community around your brand.",
      sections: [
        {
          title: "Community Engagement",
          content: "We use organic strategies and targeted ads to grow your community with real, interested users."
        },
        {
          title: "Brand Consistency",
          content: "We ensure your social media presence is aligned with your brand values and provides a consistent experience for your audience."
        }
      ]
    }
  },
];
