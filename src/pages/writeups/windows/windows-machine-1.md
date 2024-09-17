---
title: 'Windows Machine 1 Writeup'
description: 'A detailed writeup of Windows Machine 1 from Hack The Box.'
tags: ['Windows', 'Penetration Testing', 'Writeup']
date: '2024-09-12'
---

# Windows Machine 1 Writeup

## Enumeration

The first step was to perform a basic enumeration of the target machine using `nmap` to identify open ports and services running on the machine:

```bash
nmap -sC -sV -oN nmap_initial_scan 10.10.10.100
```
