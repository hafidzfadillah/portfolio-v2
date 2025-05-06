import type { ReactNode } from "react"
import { Code } from "lucide-react"

interface TechSkillIconProps {
  name: string
  size?: number
  className?: string
}

export function TechSkillIcon({ name, size = 24, className = "" }: TechSkillIconProps) {
  // Map of technology names to Lucide icons
  const iconMap: Record<string, ReactNode> = {
    kotlin: <img width="48" height="48" src="https://img.icons8.com/color/96/kotlin.png" alt="kotlin" />,
    flutter: <img width="48" height="48" src="https://img.icons8.com/color/96/flutter.png" alt="flutter" />,
    java: (
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png"
        alt="java-coffee-cup-logo--v1"
      />
    ),
    firebase: <img width="48" height="48" src="https://img.icons8.com/color/96/firebase.png" alt="firebase" />,
    python: <img width="48" height="48" src="https://img.icons8.com/color/96/python--v1.png" alt="python--v1" />,
    mysql: <img width="48" height="48" src="https://img.icons8.com/fluency/96/mysql-logo.png" alt="mysql-logo" />,
    laravel: (
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-color-tal-revivo.png"
        alt="external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-color-tal-revivo"
      />
    ),
    git: <img width="48" height="48" src="https://img.icons8.com/color/96/git.png" alt="git" />,
    android: <img width="48" height="48" src="https://img.icons8.com/fluency/96/android-os.png" alt="android-os" />,
  }

  const normalizedName = name.toLowerCase().replace(/\s+/g, "")

  // Return the icon if it exists, otherwise return the name as text
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm mx-auto">
        {iconMap[normalizedName] || <Code size={size} className={className} />}
      </div>
      <span className="text-xs font-medium text-center">{name}</span>
    </div>
  )
}
