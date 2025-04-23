import React from 'react'

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '100' },
    { id: 2, name: 'Average Creation Time', value: '30 minutes' },
    { id: 3, name: 'Shipping Time Frame', value: '3 - 5 Business Days' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-9 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Impact
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are committed to making a positive impact in the world one RoK at a time. Our mission is to empower individuals and communities
            through our designs, in honor of our African heritage.
          </p>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
        </div>
    )
  }
