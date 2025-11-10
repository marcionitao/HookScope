import type { ComponentProps, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants' // ajuda a definir variantes para o botão, ex: tamanho

const iconButton = tv({
	base: 'flex items-center justify-center rounded-lg hover-bg-zinc-700 transition-colors duration-150',
	variants: {
		size: {
			sm: 'size-6',
			md: 'size-8',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

// IconButtonProps recebe todas as propriedades do "button" e recebe as minhas opções
interface IconButtonProps
	extends ComponentProps<'button'>,
		VariantProps<typeof iconButton> {
	icon: ReactNode
}

export function IconButton({
	icon,
	size,
	className,
	...props
}: IconButtonProps) {
	return (
		<button
			type="button"
			className={iconButton({ size, className })}
			{...props}
		>
			{icon}
		</button>
	)
}
