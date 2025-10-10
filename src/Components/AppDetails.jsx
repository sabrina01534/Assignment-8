import React from 'react';
import { useParams } from 'react-router';
import useApps from './Hooks/useApps';
import downloadsImg from '../assets/ui/assets/icon-downloads.png'
import ratingsImg from '../assets/ui/assets/icon-ratings.png'
import { BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Bar, Legend } from 'rechart';


const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    console.log(apps)
    const newApp = apps.find(a => String(a.id) === id)

    const { title, description, downloads, ratings, image } = newApp || {}
    console.log(newApp)
    if (loading) return <p>Loading.....</p>

    const handleInstallation = () => {
        const existingList = JSON.parse(localStorage.getItem('installation'))
        let updatedList = []

        if (existingList) {
            const isDuplicate = existingList.some(a => a.id === AppDetails.id)
            if (isDuplicate) return alert('already installed')
            updatedList = [...existingList, apps]
        }
        else {
            updatedList.push(apps)
        }
        localStorage.setItem('installation', JSON.stringify(updatedList))
    }

    return (
        <div>

            <div className="card bg-base-100 border hover:scale-105 shadow-sm">
                <figure className='h-45 overflow-hidden '>
                    <img className='w-full object-cover '
                        src={image}
                        alt="no image show" />
                </figure >
                <div className="card-body">
                    <div className='flex gap-5'>
                        <h6 className="card-title mb-5">
                            {apps?.title}</h6>
                        <p className="s-text text-sm mt-5">:{apps?.description}</p>
                    </div>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline"><img className='h-5 w-5' src={downloadsImg} />{apps?.downloads}</div>
                        <div className="badge badge-outline"><img className='h-5 w-5' src={ratingsImg} /> ratings </div>


                        <button onClick={handleInstallation} className='btn-color'>Install</button>
                    </div>
                </div>

            </div>
            <div className='space-y-3'>
                <h3 className='font-bold mt-5'>Ratings</h3>
                <div className='bg-bage-100 border rounded-xl p-4 h-80'>
                
  {/* [
    {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  ];


    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>*/}
                </div> 
            </div>
            <div>
                <h3 className='font-bold mt-5'>Description</h3>
                <p className='s-text text-sm'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.<br /><br />

                    A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.<br /><br />

                    For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>
        </div>
    );
};

export default AppDetails;