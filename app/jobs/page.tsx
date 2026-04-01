import type { Metadata } from 'next'
import { Briefcase, Laptop, Globe, TrendingUp, DollarSign, Users, CheckCircle, AlertCircle, Coffee, Building2, FileText, Calculator } from 'lucide-react'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Jobs & Remote Work in Georgia - Complete Guide for Digital Nomads',
  description: 'Everything about working in Georgia: remote work opportunities, digital nomad visa, freelancing, local jobs, salaries, taxes, and coworking spaces in Tbilisi.',
  keywords: 'jobs Georgia, remote work Tbilisi, digital nomad visa Georgia, freelancing Georgia, work in Tbilisi, expat jobs, Georgia salary, tax Georgia',
}

export default function JobsPage() {
  const remoteWorkOptions = [
    {
      type: 'Keep Your Current Job',
      difficulty: 'Easy',
      income: 'Your current salary',
      pros: ['Stable income', 'No job hunting', 'Familiar work', 'Keep benefits'],
      cons: ['Time zone challenges', 'May need employer approval', 'Internet dependency'],
      best_for: 'Employees with remote-friendly companies',
      tips: [
        'Check your employment contract for location restrictions',
        'Discuss with HR about working from Georgia',
        'Ensure your work hours align with company timezone',
        'Get a reliable internet connection (100+ Mbps)',
        'Consider tax implications in both countries'
      ]
    },
    {
      type: 'Freelancing',
      difficulty: 'Medium',
      income: '$1000-5000+/month',
      pros: ['Flexible schedule', 'Choose clients', 'Tax advantages', 'Multiple income streams'],
      cons: ['Inconsistent income', 'Need to find clients', 'Self-discipline required'],
      best_for: 'Developers, designers, writers, consultants',
      tips: [
        'Build portfolio before moving',
        'Use Upwork, Fiverr, Toptal for clients',
        'Set up proper invoicing system',
        'Register as individual entrepreneur in Georgia (optional)',
        'Keep 3-6 months expenses saved'
      ]
    },
    {
      type: 'Start Your Own Business',
      difficulty: 'Hard',
      income: 'Variable ($0-10000+/month)',
      pros: ['Full control', 'Unlimited potential', 'Build equity', 'Georgia-friendly business laws'],
      cons: ['High risk', 'Requires capital', 'Time intensive', 'Uncertain income'],
      best_for: 'Entrepreneurs with business ideas and capital',
      tips: [
        'Georgia has simple business registration (1 day)',
        'Low corporate tax (15% or 1% on turnover)',
        'Consider Virtual Zone for 0% tax',
        'Hire local accountant (₾200-500/month)',
        'Network with other entrepreneurs at coworking spaces'
      ]
    },
    {
      type: 'Local Employment',
      difficulty: 'Hard',
      income: '₾1500-5000/month ($550-1850)',
      pros: ['Stable income', 'Work permit included', 'Local network', 'Learn Georgian'],
      cons: ['Lower salaries', 'Language barrier', 'Limited opportunities', 'Work permit needed'],
      best_for: 'Teachers, IT professionals, hospitality workers',
      tips: [
        'English teaching is most common expat job',
        'IT sector pays best for locals (₾3000-8000/month)',
        'Employer must sponsor work permit',
        'Learn Georgian for better opportunities',
        'Check jobs.ge and hr.ge for listings'
      ]
    }
  ]

  const digitalNomadVisa = {
    name: 'Remotely from Georgia',
    duration: '1 year (renewable)',
    cost: '$0 (free)',
    requirements: [
      'Work remotely for non-Georgian company',
      'Earn $2000+/month',
      'Have health insurance',
      'Clean criminal record'
    ],
    benefits: [
      'Stay up to 1 year',
      'No Georgian income tax',
      'Bring family members',
      'Access to banking',
      'Renewable annually'
    ],
    application: [
      'Apply online at migration.gov.ge',
      'Provide proof of income (bank statements)',
      'Show employment contract or client contracts',
      'Upload health insurance',
      'Wait 10-30 days for approval',
      'Pick up residence card in Tbilisi'
    ],
    website: 'migration.gov.ge'
  }

  const coworkingSpaces = [
    {
      name: 'Terminal',
      location: 'Vera',
      price: '₾200-400/month',
      rating: 4.9,
      internet: '500+ Mbps',
      features: ['24/7 access', 'Meeting rooms', 'Events', 'Kitchen', 'Showers'],
      best_for: 'Serious professionals, startups',
      website: 'terminal.ge'
    },
    {
      name: 'Impact Hub Tbilisi',
      location: 'Vake',
      price: '₾150-350/month',
      rating: 4.7,
      internet: '300+ Mbps',
      features: ['Networking events', 'Mentorship', 'Community', 'Kitchen'],
      best_for: 'Entrepreneurs, social impact',
      website: 'tbilisi.impacthub.net'
    },
    {
      name: 'Fabrika',
      location: 'Marjanishvili',
      price: '₾100-250/month',
      rating: 4.6,
      internet: '200+ Mbps',
      features: ['Creative space', 'Cafe', 'Events', 'Hostel attached'],
      best_for: 'Creatives, digital nomads',
      website: 'fabrikatbilisi.com'
    },
    {
      name: 'Nest',
      location: 'Saburtalo',
      price: '₾180-320/month',
      rating: 4.5,
      internet: '400+ Mbps',
      features: ['Quiet environment', 'Private offices', 'Meeting rooms'],
      best_for: 'Focus work, calls',
      website: 'nest.ge'
    }
  ]

  const salaryExpectations = [
    // IT & Tech
    { role: 'Junior Developer', local: '₾2000-3500', expat: '$1200-2000', notes: 'Entry level, 0-2 years experience' },
    { role: 'Mid-Level Developer', local: '₾3500-6000', expat: '$2500-4000', notes: '2-5 years experience, most common' },
    { role: 'Senior Developer', local: '₾6000-12000', expat: '$4500-8000', notes: '5+ years, high demand' },
    { role: 'Tech Lead', local: '₾8000-15000', expat: '$6000-10000', notes: 'Leadership experience required' },
    { role: 'DevOps Engineer', local: '₾4000-8000', expat: '$3000-6000', notes: 'Growing demand' },
    { role: 'UI/UX Designer', local: '₾2500-5000', expat: '$1800-3500', notes: 'Portfolio essential' },
    
    // Teaching
    { role: 'English Teacher (Private)', local: '₾1500-3000', expat: '$1000-2000', notes: 'Most common expat job, flexible hours' },
    { role: 'International School Teacher', local: '₾2500-5000', expat: '$2000-4000', notes: 'Requires teaching certification' },
    { role: 'University Lecturer', local: '₾2000-4000', expat: '$1500-3000', notes: 'Advanced degree required' },
    { role: 'Online English Teacher', local: '₾1200-2500', expat: '$800-1800', notes: 'Remote, flexible, part-time' },
    
    // Hospitality & Tourism
    { role: 'Hotel Staff', local: '₾1000-2000', expat: '$700-1400', notes: 'Entry level, tips extra' },
    { role: 'Restaurant Manager', local: '₾1500-3000', expat: '$1000-2200', notes: 'Experience required' },
    { role: 'Tour Guide', local: '₾1200-2500', expat: '$800-1800', notes: 'Seasonal, tips extra' },
    { role: 'Hostel Manager', local: '₾1500-2500', expat: '$1000-1800', notes: 'Often includes accommodation' },
    
    // Business & Marketing
    { role: 'Digital Marketer', local: '₾2000-5000', expat: '$1500-3500', notes: 'Growing field, remote-friendly' },
    { role: 'Content Writer', local: '₾1500-3000', expat: '$1000-2200', notes: 'Freelance common' },
    { role: 'Sales Manager', local: '₾1500-4000', expat: '$1200-3000', notes: 'Plus commission' },
    { role: 'Business Development', local: '₾2000-5000', expat: '$1500-3500', notes: 'Commission-based' },
    { role: 'Project Manager', local: '₾3000-6000', expat: '$2200-4500', notes: 'Experience required' },
    { role: 'Account Manager', local: '₾2000-4000', expat: '$1500-3000', notes: 'Client-facing' },
    
    // Customer Service & Support
    { role: 'Customer Support', local: '₾1500-2500', expat: '$1000-1800', notes: 'Remote-friendly, shift work' },
    { role: 'Technical Support', local: '₾1800-3000', expat: '$1300-2200', notes: 'Tech knowledge required' },
    { role: 'Community Manager', local: '₾1500-3000', expat: '$1100-2200', notes: 'Social media focus' },
    
    // Creative & Design
    { role: 'Graphic Designer', local: '₾1800-3500', expat: '$1300-2500', notes: 'Portfolio important' },
    { role: 'Video Editor', local: '₾2000-4000', expat: '$1500-3000', notes: 'Growing demand' },
    { role: 'Photographer', local: '₾1500-3500', expat: '$1100-2500', notes: 'Freelance common' },
    { role: 'Social Media Manager', local: '₾1800-3500', expat: '$1300-2500', notes: 'Remote-friendly' }
  ]

  const taxInfo = [
    {
      category: 'Remote Work (Foreign Company)',
      rate: '0%',
      details: 'If you work for non-Georgian company and paid outside Georgia, no Georgian tax',
      requirements: ['Digital nomad visa or tourist status', 'Income from abroad', 'Not physically working for Georgian entity']
    },
    {
      category: 'Freelancing (Individual Entrepreneur)',
      rate: '1%',
      details: 'Register as IE, pay 1% turnover tax on income up to ₾500,000/year',
      requirements: ['Register as Individual Entrepreneur', 'Annual revenue under ₾500,000', 'File quarterly returns']
    },
    {
      category: 'Local Employment',
      rate: '20%',
      details: 'Income tax on Georgian employment',
      requirements: ['Work permit', 'Georgian employer', 'Employer withholds tax']
    },
    {
      category: 'Small Business (LLC)',
      rate: '15%',
      details: 'Corporate profit tax, only paid on distributed dividends',
      requirements: ['Register LLC', 'Proper accounting', 'Annual financial statements']
    }
  ]

  const workVisaProcess = [
    {
      step: 1,
      title: 'Find Job with Georgian Employer',
      time: 'Varies',
      details: 'Employer must be registered Georgian company willing to sponsor',
      requirements: ['Job offer letter', 'Employment contract', 'Company registration documents'],
      cost: '₾0',
      tip: 'Employer handles most paperwork'
    },
    {
      step: 2,
      title: 'Employer Applies for Work Permit',
      time: '15-20 days',
      details: 'Employer submits application to Ministry of Economy',
      requirements: ['Employment contract', 'Your passport copy', 'Company documents', 'Justification letter'],
      cost: '₾100 (employer pays)',
      tip: 'Employer must prove they need foreign worker'
    },
    {
      step: 3,
      title: 'You Apply for Residence Permit',
      time: '30-45 days',
      details: 'Apply at Public Service Hall with approved work permit',
      requirements: ['Valid passport', 'Work permit approval', 'Medical certificate', 'Background check', 'Proof of accommodation', 'Photos'],
      cost: '₾200',
      tip: 'Can apply from inside Georgia on tourist visa'
    },
    {
      step: 4,
      title: 'Receive Residence Card',
      time: '1-2 weeks after approval',
      details: 'Pick up residence card at Public Service Hall',
      requirements: ['Approval notification', 'Passport', 'Receipt'],
      cost: '₾0',
      tip: 'Valid for duration of employment contract (up to 6 years)'
    }
  ]

  const jobBoards = [
    { 
      name: 'jobs.ge', 
      type: 'Local Jobs', 
      url: 'jobs.ge', 
      languages: ['Georgian', 'English'],
      focus: 'Most popular job site in Georgia - all industries',
      best_for: 'Local companies, teaching jobs, hospitality, IT',
      tip: 'Create profile in both Georgian and English for best results'
    },
    { 
      name: 'hr.ge', 
      type: 'Local Jobs', 
      url: 'hr.ge', 
      languages: ['Georgian', 'English'],
      focus: 'Professional roles, mid-senior positions',
      best_for: 'IT, management, professional services',
      tip: 'Better for experienced professionals than entry-level'
    },
    { 
      name: 'LinkedIn', 
      type: 'International', 
      url: 'linkedin.com', 
      languages: ['English'],
      focus: 'International companies, remote work',
      best_for: 'Expat-friendly roles, remote positions, networking',
      tip: 'Best for finding international companies with Georgia offices'
    },
    { 
      name: 'Facebook Groups', 
      type: 'Social/Community', 
      url: 'facebook.com', 
      languages: ['English', 'Georgian'],
      focus: 'Jobs in Georgia, Tbilisi Jobs, Digital Nomads Georgia groups',
      best_for: 'Freelance, part-time, startups, hidden opportunities',
      tip: 'Great for networking and unadvertised positions'
    },
    { 
      name: 'We Work Remotely', 
      type: 'Remote', 
      url: 'weworkremotely.com', 
      languages: ['English'],
      focus: 'Remote positions worldwide',
      best_for: 'Keeping your current career while living in Georgia',
      tip: 'Filter by time zone compatibility (GMT+4)'
    },
    { 
      name: 'Remote.co', 
      type: 'Remote', 
      url: 'remote.co', 
      languages: ['English'],
      focus: 'Curated remote jobs',
      best_for: 'Quality remote positions, all industries',
      tip: 'Less spam than other remote job boards'
    },
    { 
      name: 'Upwork', 
      type: 'Freelance', 
      url: 'upwork.com', 
      languages: ['English'],
      focus: 'Freelance projects, hourly & fixed-price',
      best_for: 'Building freelance income, flexible work',
      tip: 'Start with lower rates to build profile, then increase'
    },
    { 
      name: 'Fiverr', 
      type: 'Freelance', 
      url: 'fiverr.com', 
      languages: ['English'],
      focus: 'Services marketplace, gig-based',
      best_for: 'Creative services, quick projects',
      tip: 'Create multiple gigs at different price points'
    },
    { 
      name: 'Toptal', 
      type: 'Freelance', 
      url: 'toptal.com', 
      languages: ['English'],
      focus: 'Top 3% freelance talent',
      best_for: 'Experienced developers, designers, finance pros',
      tip: 'Rigorous screening but highest rates'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Jobs & Remote Work in Georgia"
        description="Everything you need to know about working in Georgia: remote work, freelancing, local jobs, digital nomad visa, taxes, and coworking spaces."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Laptop className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">0%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tax on Remote Work</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">$2000</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Min for DN Visa</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Coffee className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Coworking Spaces</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Freelance Tax</div>
          </div>
        </div>

        {/* Remote Work Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Remote Work Options</h2>
          <div className="grid gap-6">
            {remoteWorkOptions.map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{option.type}</h3>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        option.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        option.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {option.difficulty}
                      </span>
                      <span className="text-lg font-bold text-green-600">{option.income}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 text-orange-600 mr-2" />
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg mb-4">
                  <div className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Best For</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{option.best_for}</div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Tips</h4>
                  <ul className="space-y-1">
                    {option.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Nomad Visa */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Globe className="h-8 w-8 text-purple-600 mr-3" />
            Digital Nomad Visa: "Remotely from Georgia"
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">{digitalNomadVisa.duration}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">{digitalNomadVisa.cost}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Application Fee</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">10-30 days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Processing Time</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {digitalNomadVisa.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {digitalNomadVisa.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Application Process</h3>
              <ol className="space-y-2">
                {digitalNomadVisa.application.map((step, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="font-bold text-blue-600 mr-2">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
                <a 
                  href={`https://${digitalNomadVisa.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Apply at {digitalNomadVisa.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coworking Spaces */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Coffee className="h-8 w-8 text-orange-600 mr-3" />
            Best Coworking Spaces
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coworkingSpaces.map((space, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{space.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{space.location}</p>
                    <div className="text-yellow-500 text-sm mt-1">★ {space.rating}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">WiFi</div>
                    <div className="font-bold text-blue-600">{space.internet}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{space.price}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">per month</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {space.features.map((feature, i) => (
                      <span key={i} className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg mb-3">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Best For</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{space.best_for}</div>
                </div>

                <a 
                  href={`https://${space.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {space.website}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Expectations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            Salary Expectations
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Local Salary</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Expat/Remote</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {salaryExpectations.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{job.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{job.local}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">{job.expat}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{job.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tax Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Calculator className="h-8 w-8 text-blue-600 mr-3" />
            Tax Information
          </h2>
          <div className="grid gap-6">
            {taxInfo.map((tax, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tax.category}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tax.details}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{tax.rate}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Tax Rate</div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Requirements</h4>
                  <ul className="space-y-1">
                    {tax.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                        <CheckCircle className="h-3 w-3 text-blue-600 mr-1 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Visa Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FileText className="h-8 w-8 text-red-600 mr-3" />
            Work Visa Process (For Local Employment)
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> This is only needed if you work for a Georgian company. Remote workers for foreign companies don't need work permits!
              </p>
            </div>
            
            <div className="space-y-6">
              {workVisaProcess.map((step, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6 relative">
                  <div className="absolute -left-3 top-0 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
                      <div className="font-semibold text-blue-600">{step.time}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{step.details}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Requirements:</h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {step.requirements.map((req, i) => (
                          <li key={i}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Cost:</h4>
                      <div className="text-lg font-bold text-green-600">{step.cost}</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        <strong>💡 Tip:</strong> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Total Process Summary</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Total Time</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">45-60 days</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Total Cost</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">₾300</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">(₾100 employer + ₾200 you)</div>
                </div>
                <div>
                  <div className="text-gray-600 dark:text-gray-400">Validity</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">Contract duration</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">(up to 6 years)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Boards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Building2 className="h-8 w-8 text-purple-600 mr-3" />
            Job Boards & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {jobBoards.map((board, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{board.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {board.languages && board.languages.map((lang, i) => (
                        <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs font-semibold">
                    {board.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{board.focus}</p>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Best for: </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{board.best_for}</span>
                </div>
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-xs text-gray-700 dark:text-gray-300 mb-2">
                  <strong>💡 Tip:</strong> {board.tip}
                </div>
                <a 
                  href={`https://${board.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {board.url}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-lg">
          <div className="flex items-start">
            <Briefcase className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Pro Tips for Working in Georgia</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Georgia is one of the best countries for remote workers - 0% tax on foreign income</li>
                <li>• Digital nomad visa is free and easy to get with $2000/month income</li>
                <li>• Coworking spaces are affordable (₾100-400/month) with excellent internet</li>
                <li>• Cost of living is low - you can live well on $1500-2000/month</li>
                <li>• Time zone (GMT+4) works well for Europe and Asia</li>
                <li>• English teaching is the easiest way to get local employment</li>
                <li>• Freelancing as Individual Entrepreneur = only 1% tax</li>
                <li>• Network at coworking spaces - great expat community</li>
                <li>• Keep 6 months expenses saved - freelance income can be irregular</li>
                <li>• Consider hiring local accountant (₾200-500/month) for tax compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="font-semibold">Last updated: November 11, 2025</p>
          <p className="mt-2">Job market and salary information verified from jobs.ge, hr.ge, and expat community feedback.</p>
          <p className="mt-1">Found outdated information? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:text-blue-700 underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}
