import { useState } from "react"

type AvatarProps = {
    src?: string
    alt?: string
    size?: "sm" | "md" | "lg"
    name?: string
}

export function Avatar({
    src,
    alt = "Avatar",
    size = "md",
    name = "",
}: AvatarProps) {

    const [error, setError] = useState(false)

    const sizes = {
        sm: "w-20 h-20",
        md: "w-32 h-32",
        lg: "w-44 h-44",
    }

    const initials = name
        .split(" ")
        .map(n => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()

    return (
        <div className="inline-block">
            <div
                className={`
        inline-flex
        rounded-full
        border-2 border-cyan-500
        p-1 transition-all duration-300
        hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
      `}
            >
                {src && !error ? (
                    <img
                        src={src}
                        alt={alt}
                        onError={() => setError(true)}
                        className={`
            ${sizes[size]}
            rounded-full
            object-cover
            block
          `}
                    />
                ) : (
                    <div
                        className={`
            ${sizes[size]}
            rounded-full
            bg-gray-900
            flex items-center justify-center
            text-cyan-400 font-bold text-xl
          `}
                    >
                        {initials || "LB"}
                    </div>
                )}
            </div>
        </div>
    )

}
