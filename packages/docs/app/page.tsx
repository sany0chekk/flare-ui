import { Button } from "@flare/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Flare UI</h1>

        <p className="text-xl text-gray-600 mb-8">
          Welcome to Flare UI documentation - a modern React component library.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Start
          </h2>
          <code className="bg-gray-100 px-3 py-2 rounded text-sm">
            npm install @flare/ui
          </code>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Components Examples
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Button - Primary
              </h3>
              <Button variant="primary" size="md">
                Primary Button
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Button - Secondary
              </h3>
              <Button variant="secondary" size="md">
                Secondary Button
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Button - Outline
              </h3>
              <Button variant="outline" size="md">
                Outline Button
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Different Sizes
              </h3>
              <div className="flex gap-2 items-center">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>🚀 Built with React 19</li>
            <li>🎨 Tailwind CSS for styling</li>
            <li>📱 Fully responsive</li>
            <li>♿ Accessibility out of the box</li>
            <li>🎯 TypeScript support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
