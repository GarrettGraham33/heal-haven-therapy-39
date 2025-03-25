
import type { Config } from "tailwindcss";

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
			padding: {
				DEFAULT: "1.5rem",
				sm: "2rem",
				lg: "4rem",
			},
			screens: {
				"2xl": "1440px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					'primary-foreground': "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					'accent-foreground': "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))"
				},
				heal: {
					green: {
						50: "#f0f9f0",
						100: "#dbf0db",
						200: "#b9e0b9",
						300: "#8ac88a",
						400: "#5aaa5a",
						500: "#3c8c3c",
						600: "#2d702d",
						700: "#265926",
						800: "#224822",
						900: "#1e3c1e",
						950: "#0c210c",
					},
					blue: {
						50: "#f0f7fc",
						100: "#e0eff8",
						200: "#c7e3f3",
						300: "#a0d0eb",
						400: "#72b6e0",
						500: "#4f9cd5",
						600: "#3a84c9",
						700: "#336ab0",
						800: "#2f5990",
						900: "#294c73",
						950: "#1c3049",
					},
					yellow: {
						50: "#fcfcf0",
						100: "#faf8d7",
						200: "#f5f0ad",
						300: "#efe476",
						400: "#e9d347",
						500: "#e2be28",
						600: "#ce991c",
						700: "#aa7219",
						800: "#8c5b19",
						900: "#734b1a",
						950: "#42280b",
					},
					charcoal: {
						50: "#f6f6f7",
						100: "#e2e2e5",
						200: "#c5c5cb",
						300: "#a0a1aa",
						400: "#7c7d8a",
						500: "#636473",
						600: "#4f505d",
						700: "#42434e",
						800: "#383943",
						900: "#32333b",
						950: "#221f26",
					}
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" }
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-left": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-top": {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out",
				"fade-out": "fade-out 0.6s ease-out",
				"slide-in-right": "slide-in-right 0.6s ease-out",
				"slide-in-left": "slide-in-left 0.6s ease-out",
				"slide-in-top": "slide-in-top 0.6s ease-out",
				"scale-in": "scale-in 0.4s ease-out",
			},
			fontFamily: {
				'heading': ['Playfair Display', 'Georgia', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Lora', 'Georgia', 'serif']
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'soft': '0 10px 50px -20px rgba(0, 0, 0, 0.15)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
