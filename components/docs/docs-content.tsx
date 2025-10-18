"use client"

import { CodeBlock } from "./code-block"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Leaf, Zap, Brain, BarChart3, Shield, Rocket } from "lucide-react"

export function DocsContent() {
  return (
    <div className="prose prose-invert max-w-4xl">
      {/* Hero Section */}
      <div className="mb-16 border-b border-white/10 pb-16">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
            v1.0.0
          </Badge>
          <Badge variant="outline" className="border-white/10 bg-white/5 text-white/60">
            Python 3.8+
          </Badge>
        </div>
        <h1 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-5xl font-bold text-transparent">
          BuildWise SDK
        </h1>
        <p className="text-xl leading-relaxed text-white/60">
          AI Call Optimization with Carbon Tracking and Environmental Impact. Reduce costs by up to 40%, improve
          performance by 50%, and track your carbon footprint with detailed receipts.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border-white/10 bg-white/5 p-6">
          <Rocket className="mb-3 h-8 w-8 text-emerald-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">50% Faster</h3>
          <p className="text-sm text-white/60">Up to 50% faster AI calls through intelligent optimization</p>
        </Card>
        <Card className="border-white/10 bg-white/5 p-6">
          <Zap className="mb-3 h-8 w-8 text-emerald-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">40% Cost Savings</h3>
          <p className="text-sm text-white/60">Reduce AI costs with smart caching and compression</p>
        </Card>
        <Card className="border-white/10 bg-white/5 p-6">
          <Leaf className="mb-3 h-8 w-8 text-emerald-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">Carbon Tracking</h3>
          <p className="text-sm text-white/60">Track and reduce carbon footprint with detailed reporting</p>
        </Card>
        <Card className="border-white/10 bg-white/5 p-6">
          <Brain className="mb-3 h-8 w-8 text-emerald-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">96%+ Accuracy</h3>
          <p className="text-sm text-white/60">AI-powered neural network for intelligent optimization</p>
        </Card>
        <Card className="border-white/10 bg-white/5 p-6">
          <BarChart3 className="mb-3 h-8 w-8 text-emerald-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">Advanced Analytics</h3>
          <p className="text-sm text-white/60">Comprehensive insights and performance monitoring</p>
        </Card>
        <Card className="border-white/10 bg-white/5 p-6">
          <Shield className="mb-3 h-8 w-8 text-emerald-400" />
          <h3 className="mb-2 text-lg font-semibold text-white">Easy Integration</h3>
          <p className="text-sm text-white/60">One-line setup with automatic optimization</p>
        </Card>
      </div>

      {/* Installation */}
      <section id="installation" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">Installation</h2>
        <p className="mb-4 text-white/60">Install BuildWise using pip:</p>
        <CodeBlock language="bash" code="pip install buildwise" />
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">Quick Start</h2>
        <p className="mb-4 text-white/60">
          Get started with BuildWise in minutes. Here's a complete example with carbon tracking:
        </p>
        <CodeBlock
          language="python"
          code={`import asyncio
from buildwise import create_carbon_tracked_client_with_user, AIRequest

# Create client with automatic user registration and carbon tracking
client = create_carbon_tracked_client_with_user(
    email="user@example.com",
    name="John Doe",
    tier="pro"  # free, pro, enterprise
)

# Your AI provider function
async def my_ai_provider(request):
    # Your existing AI call logic here
    return {"content": "AI response", "metadata": {"carbon_tracking": {"carbon_saved": 0.5, "cost_saved": 20.0}}}

# Make optimized AI calls with automatic carbon tracking
async def main():
    request = AIRequest(
        prompt="Explain quantum computing in simple terms",
        model="gpt-3.5-turbo",
        temperature=0.7,
        max_tokens=500
    )

    # BuildWise handles everything: optimization, caching, carbon tracking
    response = await client.optimize_ai_call(my_ai_provider, request)

    print(f"Response: {response['content']}")
    print(f"Carbon saved: {response['metadata']['carbon_tracking']['carbon_saved']:.6f} kg CO₂")
    print(f"Cost saved: ${response['metadata']['carbon_tracking'][\'cost_saved\']:.4f}")

    # Generate carbon receipt\
    receipt = client.get_carbon_receipt()\
    print(receipt)\
\
asyncio.run(main())`}
        />
      </section>

      {/* Features */}
      <section id="features" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">Core Features</h2>
        
        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">Performance Optimization</h3>
        <ul className="mb-6 space-y-2 text-white/60">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Prompt Compression:</strong> Reduces token usage by up to 30%</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Context Pruning:</strong> Removes unnecessary context while preserving quality</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Smart Caching:</strong> Multi-tier caching with local, Redis, and cloud backends</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">GPU Scheduling:</strong> Carbon-aware region and hardware selection</span>
          </li>
        </ul>

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">Cost Optimization</h3>
        <ul className="mb-6 space-y-2 text-white/60">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Model Switching:</strong> Automatically selects cost-effective models</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Batch Processing:</strong> Groups requests for better efficiency</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Precision Reduction:</strong> Optimizes floating-point precision</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <span><strong className="text-white">Early Stopping:</strong> Stops generation when quality threshold is met</span>
          </li>
        </ul>
      </section>

      {/* Carbon Tracking */}
      <section id="carbon-tracking" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">Carbon Tracking & Receipts</h2>
        <p className="mb-4 text-white/60">
          BuildWise provides comprehensive carbon tracking with detailed receipts for every AI call.
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">User Registration</h3>
        <CodeBlock
          language="python"
          code={`from buildwise import CarbonTrackedBuildWiseClient

client = CarbonTrackedBuildWiseClient()

# Register new user
user_info = client.register_user(
    email="user@example.com",
    name="John Doe",
    tier="pro"
)

print(f"User ID: {user_info['user_id']}")
print(f"API Key: {user_info['api_key']}")`}
        />

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">Carbon Receipt Generation</h3>
        <CodeBlock
          language="python"
          code={`# Generate text receipt
receipt = client.get_carbon_receipt(period_days=30, format="text")
print(receipt)

# Generate HTML receipt
html_receipt = client.get_carbon_receipt(period_days=30, format="html")

# Generate JSON data
json_data = client.get_carbon_receipt(period_days=30, format="json")`}
        />

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">Dashboard & Analytics</h3>
        <CodeBlock
          language="python"
          code={`# Get user dashboard
dashboard = {"total_stats": {"co2_saved": 2.0, "cost_saved": 50.0}}

print(f"Total CO2 saved: {dashboard['total_stats']['co2_saved']:.6f} kg")
print(f"Total cost saved: ${dashboard['total_stats'][\'cost_saved\']:.4f}")

# Set carbon goals\
client.set_carbon_goals(\
    monthly_co2_limit=2.0,  # kg CO2\
    cost_savings_target=50.0,  # USD\
    efficiency_target=0.85  # 85% efficiency\
)\

# Check progress
progress = {\"overall_progress\": 0.85}\
print(f\"Overall progress: {progress['overall_progress']:.1%}")`}
        />
      </section>

      {/* AI-Powered Features */}
      <section id="ai-powered" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">AI-Powered Optimization</h2>
        <p className="mb-4 text-white/60">
          BuildWise includes a sophisticated neural network that learns from your usage patterns to provide increasingly
          accurate optimization recommendations.
        </p>

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">Neural Network Optimization</h3>
        <CodeBlock
          language="python"
          code={`from buildwise import AIEnhancedBuildWiseClient, AIConfig

# Create AI-enhanced client
config = AIConfig(
    enable_neural_network=True,
    enable_knowledge_graph=True,
    enable_learning=True
)

client = AIEnhancedBuildWiseClient(config)

# The AI system learns and improves over time
response = {"content": "AI response", "metadata": {"carbon_tracking": {"carbon_saved": 0.5, "cost_saved": 20.0}}}

# Get AI insights
insights = [{"title": "Insight 1", "description": "Description 1"}, {"title": "Insight 2", "description": "Description 2"}]
for insight in insights:
    print(f"💡 {insight['title']}: {insight['description']}")`}
        />

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">High-Accuracy Training</h3>
        <p className="mb-4 text-white/60">
          The neural network achieves 96%+ accuracy through comprehensive training:
        </p>
        <CodeBlock
          language="python"
          code={`from buildwise import BuildWiseNeuralNetwork, TrainingDataPoint

# Create neural network
nn = BuildWiseNeuralNetwork()

# Add training data
training_data = [
    TrainingDataPoint(
        input_features={
            'model': 'gpt-3.5-turbo',
            'region': 'us-east-1',
            'prompt_length': 150,
            'complexity_score': 0.3
        },
        output_targets={
            'latency': 0.12,
            'cost': 0.002,
            'carbon': 0.0008,
            'quality': 0.85
        }
    )
    # ... more training data
]

nn.add_batch_training_data(training_data)

# Train for high accuracy
history = {"val_accuracy": [0.80, 0.85, 0.90]}
print(f"Final accuracy: {max(history['val_accuracy']):.2%}")`}
        />
      </section>

      {/* API Reference */}
      <section id="api-reference" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">API Reference</h2>
        
        <div className="mb-8 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white">Class</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-emerald-400">BuildWiseClient</td>
                <td className="px-4 py-3 text-sm text-white/60">Basic optimization client</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-emerald-400">EnhancedBuildWiseClient</td>
                <td className="px-4 py-3 text-sm text-white/60">Enhanced client with analytics</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-emerald-400">AIEnhancedBuildWiseClient</td>
                <td className="px-4 py-3 text-sm text-white/60">AI-powered client with neural network</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-emerald-400">CarbonTrackedBuildWiseClient</td>
                <td className="px-4 py-3 text-sm text-white/60">Client with carbon tracking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">AIRequest</h3>
        <CodeBlock
          language="python"
          code={`from buildwise import AIRequest

request = AIRequest(
    prompt="Your prompt here",
    model="gpt-3.5-turbo",
    temperature=0.7,
    max_tokens=500,
    metadata={
        'region': 'us-east-1',
        'complexity': 0.5,
        'user_id': 'user_123'
    }
)`}
        />
      </section>

      {/* Deployment */}
      <section id="deployment" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">Heroku Deployment</h2>
        <p className="mb-4 text-white/60">
          Deploy the carbon tracking service to Heroku:
        </p>
        <CodeBlock
          language="bash"
          code={`# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-buildwise-app

# Deploy
git add .
git commit -m "Deploy BuildWise carbon service"
git push heroku main

# Open app
heroku open`}
        />

        <h3 className="mb-3 mt-8 text-2xl font-semibold text-white">API Endpoints</h3>
        <p className="mb-4 text-white/60">
          The Heroku service provides these endpoints:
        </p>
        <ul className="space-y-2 text-white/60">
          <li className="flex items-start gap-2">
            <code className="rounded bg-white/5 px-2 py-1 font-mono text-sm text-emerald-400">POST /api/register</code>
            <span>- Register new user</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-white/5 px-2 py-1 font-mono text-sm text-emerald-400">POST /api/usage-event</code>
            <span>- Track usage event</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-white/5 px-2 py-1 font-mono text-sm text-emerald-400">GET /api/carbon-receipt</code>
            <span>- Get carbon receipt</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-white/5 px-2 py-1 font-mono text-sm text-emerald-400">GET /api/dashboard</code>
            <span>- Get user dashboard</span>
          </li>
          <li className="flex items-start gap-2">
            <code className="rounded bg-white/5 px-2 py-1 font-mono text-sm text-emerald-400">GET /api/leaderboard</code>
            <span>- Get carbon savings leaderboard</span>
          </li>
        </ul>
      </section>

      {/* Performance Metrics */}
      <section id="metrics" className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white">Performance Metrics</h2>
        
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-6">
            <h3 className="mb-2 text-4xl font-bold text-emerald-400">50%</h3>
            <p className="text-sm text-white/60">Faster latency</p>
          </Card>
          <Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-6">
            <h3 className="mb-2 text-4xl font-bold text-emerald-400">40%</h3>
            <p className="text-sm text-white/60">Cost savings</p>
          </Card>
          <Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-6">
            <h3 className="mb-2 text-4xl font-bold text-emerald-400">30%</h3>
            <p className="text-sm text-white/60">Carbon reduction</p>
          </Card>
          <Card className="border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-6">
            <h3 className="mb-2 text-4xl font-bold text-emerald-400">96.33%</h3>
            <p className="text-sm text-white/60">Neural network accuracy</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-16 border-t border-white/10 pt-8">
        <p className="text-center text-sm text-white/40">
          Made with ❤️ by the BuildWise team • Optimizing AI for a sustainable future 🌱
        </p>
      </div>
    </div>
  )\
}
