import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
        /* Shadcn UI semantic colors */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
        /* Destructive removed as per PRD focus */
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        /* PRD specific color names for direct use if needed (e.g., text-primaryText) */
        appBackground: 'hsl(var(--prd-background))', // from PRD background
        surface: 'hsl(var(--prd-surface))', // from PRD surface
        primaryText: 'hsl(var(--prd-primary-text))', // from PRD primaryText
        secondaryText: 'hsl(var(--prd-secondary-text))', // from PRD secondaryText
        accentButton: 'hsl(var(--prd-accent-button))', // from PRD accentButton
        prdBorder: 'hsl(var(--prd-border))' // from PRD border
        /* Sidebar colors removed */
			},
			borderRadius: {
				lg: 'var(--radius)', // 0.5rem, matches PRD 'rounded-lg'
				md: 'calc(var(--radius) - 2px)', // 0.5rem - 2px, matches PRD 'rounded-md'
				sm: 'calc(var(--radius) - 4px)'
			},
      fontFamily: {
        sans: ["sans-serif", ...fontFamily.sans], // Ensures PRD primaryFont: "sans-serif" is respected
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
