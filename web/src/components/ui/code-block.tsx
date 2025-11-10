import { type ComponentProps, useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'
import { twMerge } from 'tailwind-merge'

interface CodeBlockProps extends ComponentProps<'div'> {
	code: string
	language?: string
}

export function CodeBlock({
	className,
	code,
	language = 'json',
	...props
}: CodeBlockProps) {
	// criando estado para o shiki
	const [parseCode, setParseCode] = useState('')

	useEffect(() => {
		if (code) {
			codeToHtml(code, {
				lang: language,
				theme: 'dracula',
			}).then((parsed) => {
				setParseCode(parsed)
			})
		}
	}, [code, language])

	return (
		<div
			className={twMerge(
				'relative rounded-lg border border-zinc-700 overflow-x-auto',
				className,
			)}
			{...props}
		> 
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div className='[&_pre]:p-4 [&_pre]:text-sm [&_pre]:font-mono [&_pre]:leading-relaxed' dangerouslySetInnerHTML={{ __html: parseCode }}/>
		</div>
	)
}
