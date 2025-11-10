import { createFileRoute } from '@tanstack/react-router'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { SectionDateTable } from '../components/section-data-table'
import { SectionTitle } from '../components/section-title'
import { Sidebar } from '../components/sidebar'
import { CodeBlock } from '../components/ui/code-block'
import { WebhookDetailHeader } from '../components/webhook-detail-header'

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	const overviewData = [
		{ key: 'Method', value: 'POST' },
		{ key: 'Status Code', value: '200' },
		{ key: 'Content-Type', value: 'application/json' },
		{ key: 'Content-Length', value: '43233 bytes' },
	]

	// const code = `
	// 	const a = 1;
	// 	const b = 2;
	// 	rerurn a + b;
	// `.trim()

	return (
		<div className="h-screen bg-zinc-900">
			<PanelGroup direction="horizontal">
				<Panel defaultSize={20} minSize={15} maxSize={40}>
					{/* sidebar */}
					<Sidebar />
				</Panel>

				<PanelResizeHandle className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150" />

				<Panel defaultSize={80} minSize={60}>
					{/* conteudo */}
					<div className="flex h-full flex-col">
						<WebhookDetailHeader />

						<div className="flex-1 overflow-y-auto">
							<div className="space-y-6 p-6">
								<div className="space-y-4 ">
									<SectionTitle>Request Overview</SectionTitle>
									{/* Table */}
									<SectionDateTable data={overviewData} />
								</div>

								<div className="space-y-4 ">
									<SectionTitle>Query Parameters</SectionTitle>
									{/* Table */}
									<SectionDateTable data={overviewData} />
								</div>

								<div className="space-y-4 ">
									<SectionTitle>Headers</SectionTitle>
									{/* Table */}
									<SectionDateTable data={overviewData} />
								</div>

								<div className="space-y-4 ">
									<SectionTitle>Request Body</SectionTitle>
									<CodeBlock code={JSON.stringify(overviewData, null, 2)} />
								</div>
							</div>
						</div>
					</div>
				</Panel>
			</PanelGroup>
		</div>
	)
}
