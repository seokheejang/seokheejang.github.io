---
title: "About"
description: "Seokhee Jang — 블록체인 인프라에서 DevOps로 옮겨가는 중인 엔지니어의 노트."
---

# Seokhee Jang

블록체인 인프라를 운영하며 DevOps/SRE 경험을 더해가는 엔지니어.
내가 굴리고 디버깅하고 만드는 것들을 여기에 적습니다.

---

## What I do

IDC 베어메탈 K8s 와 AWS EKS 위에서 멀티체인 블록체인 RPC 인프라를 운영합니다. 수동 운영에서 발생하는 장애 포인트들을 줄이기 위해, 변경 가능성이 있고 관리할 수 있는 범위 안에서 K8s 자원에 GitOps 패턴을 적용해 가려고 합니다.

자주 만지는 스택:
- **Cluster**: EKS · IDC bare-metal K8s · Cilium
- **GitOps / CD**: ArgoCD (App-of-Apps) · Helm · ExternalDNS · cert-manager
- **IaC / CI**: Terraform · GitHub Actions
- **Workflow**: Claude Code / AI agent 를 헬스체크 · 드리프트 감지 · PR 자동화에 끼워넣는 실험

블로그는 "한 번 푼 문제를 다시 풀지 않으려는" 노트에서 출발합니다. 같은 문제 푸는 다른 엔지니어에게 한 줄이라도 도움이 되면 좋습니다.

## Currently building (2026)

- **RPC IaC migration** — IDC K8s 멀티체인 RPC 노드를 **ArgoCD GitOps** 로 전환. AI agent 가 health-sweep · 드리프트 감지 · 버전 업데이트 PR 을 같이 만드는 구조 실험. _2026-03 시작_
- **IDC Private DNS** — 기존 BIND9 환경에 **ExternalDNS** 를 연동해 K8s 서비스의 DNS 레코드 등록을 자동화. _2026-04 시작_
- **EKS Bootstrap Template** — AWS **Terraform + EKS + Helm/ArgoCD** 재사용 가능한 부트스트랩 베이스. _2026-05 시작_
- **AI Content Paywall** — AI agent 가 x402 로 결제하고 작성자 지갑에 직접 입금되는 하이브리드 콘텐츠 게이트. _2026-05 리서치 단계_

## Background

- **5+ years** — Blockchain infrastructure: 멀티체인 RPC, validator ops, IDC bare-metal operations
- **1+ year** — DevOps / SRE 전환: **GitOps · IaC · CI/CD migration** 중심
- **Daily drivers**: EKS · ArgoCD · Helm · Terraform · ExternalDNS

## Find me

- GitHub — [@seokheejang](https://github.com/seokheejang)
- LinkedIn — [Seokhee Jang](https://www.linkedin.com/in/seokhee-jang-93b5ab319/)
