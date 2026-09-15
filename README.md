# video-web-client — Reals Video

> Angular 21 · Nx 22 · Port **4201** (dev & Docker)

Không gian **Video** trong hệ sinh thái Reals Platform. Chuyên trách video playback (HLS Streaming), short-form Reels theo chiều dọc, khám phá nội dung video và quản lý media.

## Workspace → [daccuong-uit/social-platform-workspace](https://github.com/daccuong-uit/social-platform-workspace)

---

## Chức năng

| Route | Mô tả |
|---|---|
| `/video` | Video Shell — Discovery & Playback chính |
| `/reels` | Short-form Reels feed dọc |
| `/media` | Quản lý media của creator |
| `/profile` | Hồ sơ cá nhân |
| `/settings` | Cài đặt tài khoản |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (Standalone, Signals-first) |
| Monorepo | Nx 22 |
| State | Angular Signals + RxJS |
| Styling | CSS custom properties (OKLCH tokens) |

## Cấu trúc thư mục

```
.
├── apps/web/
│   └── src/
│       ├── app/routes/        # app.routes.ts — gốc → /video
│       └── environments/      # environment.ts
│
└── libs/
    ├── core/                  # AuthService, guards, interceptors
    ├── ui/                    # Shared UI components (PageShell, SidebarMenu…)
    ├── entities/              # Domain models: profile, media, social
    └── features/
        ├── video/             # VideoShellComponent + VideoComponent
        ├── reels/             # Reels feed dọc
        ├── media/             # Media management
        ├── profile/           # User profile
        └── settings/          # Settings
```

## Chạy local

```bash
npm install
npm start          # → http://localhost:4201
npm run build
```

## Docker

```bash
# Từ workspace root:
docker compose build fe-video
docker compose up -d fe-video

# → http://localhost:4201
```

Nginx phục vụ Angular bundle và proxy `/api/*` → `gateway:3000`.
