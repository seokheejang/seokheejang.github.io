import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

// ---------------------------------------------------------------------------
// Controlled tag vocabulary (~25). New tags should be added here first.
// Goal: prevent fragmentation (k8s vs kubernetes), keep tag pages meaningful.
//
//  K8s / container       : k8s · eks · helm · argocd · istio · cilium
//  IaC / AWS / CI-CD     : terraform · aws · gitops · iac
//  Blockchain infra      : blockchain · rpc-node · validator · idc
//  Ops domains           : networking · observability · security · cost
//  AI / Agent (thread)   : claude-code · ai-agent · automation
//  Project journals      : project-rpc-iac · project-idc-dns · project-eks-bootstrap · project-paywall
// ---------------------------------------------------------------------------

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };
