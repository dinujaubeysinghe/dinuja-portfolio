import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * GitStats
 * Live GitHub stats + contribution heatmap, styled to match
 * the portfolio's dark theme with #8b3dff accent.
 *
 * Usage:
 *   <GitStats username="dinujaubeysinghe" />
 */
const GITHUB_USERNAME_DEFAULT = 'dinujaubeysinghe'

const GitStats = ({ username = GITHUB_USERNAME_DEFAULT }) => {
    const [profile, setProfile] = useState(null)
    const [contributions, setContributions] = useState([])
    const [totalContributions, setTotalContributions] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const scrollRef = useRef(null)

    useEffect(() => {
        let cancelled = false

        const fetchData = async () => {
            try {
                const [profileRes, contribRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`),
                    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
                ])

                if (!profileRes.ok || !contribRes.ok) throw new Error('Fetch failed')

                const profileData = await profileRes.json()
                const contribData = await contribRes.json()

                if (cancelled) return

                setProfile(profileData)
                setContributions(contribData.contributions || [])
                setTotalContributions(contribData.total?.lastYear ?? 0)
            } catch (err) {
                if (!cancelled) setError(true)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        fetchData()
        return () => { cancelled = true }
    }, [username])

    // once data has loaded and the grid has rendered, jump the scroll
    // container to the right edge so the most recent weeks are visible first
    useEffect(() => {
        if (loading || !scrollRef.current) return
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }, [loading])

    // group the flat contributions array into weeks (columns), 7 days each
    const weeks = []
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7))
    }

    const levelColor = (level) => {
        switch (level) {
            case 0: return 'bg-[#161b22]'
            case 1: return 'bg-[#0e4429]'
            case 2: return 'bg-[#006d32]'
            case 3: return 'bg-[#26a641]'
            case 4: return 'bg-[#39d353]'
            default: return 'bg-[#161b22]'
        }
    }

    const monthLabels = []
    let lastMonth = null
    weeks.forEach((week, i) => {
        const firstDay = week[0]
        if (!firstDay) return
        const month = new Date(firstDay.date).toLocaleString('default', { month: 'short' })
        if (month !== lastMonth) {
            monthLabels.push({ index: i, label: month })
            lastMonth = month
        }
    })

    if (error) {
        return (
            <div className="text-white/40 text-sm font-main text-center py-8">
                Couldn't load GitHub stats right now.
            </div>
        )
    }

    return (
        <section className="relative z-10 py-12 px-6 max-w-5xl mx-auto" id="git-stats">
            <motion.div className="grid md:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
            >
                <div >
                    <p className="font-main text-sm text-primary uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>
                        My GitHub Stats
                    </p>
                    <h2
                        className="font-main font-bold text-white mb-6"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15 }}
                    >
                        Commits<span className="text-white font-serif">,</span> streaks and activities<span className="text-white font-serif">.</span>
                    </h2>
                </div>
            </motion.div>

            <motion.div
                className="border border-white/10 rounded-3xl p-6 md:p-8 bg-white/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* profile + stats */}
                    <div className="md:col-span-1">
                        {loading ? (
                            <div className="animate-pulse space-y-3">
                                <div className="h-12 w-12 rounded-full bg-white/10" />
                                <div className="h-4 w-32 bg-white/10 rounded" />
                                <div className="h-3 w-48 bg-white/10 rounded" />
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={profile?.avatar_url}
                                        alt={username}
                                        className="h-12 w-12 rounded-full border border-[#8b3dff]/40"
                                    />
                                    <div>
                                        <div className="text-white font-main font-semibold">
                                            {profile?.name || username}
                                        </div>
                                        <div className="text-white/40 font-main text-xs">
                                            @{username}
                                        </div>
                                    </div>
                                </div>

                                {profile?.bio && (
                                    <p className="text-white/50 font-main text-sm mt-4 leading-relaxed">
                                        {profile.bio}
                                    </p>
                                )}

                                <div className="flex gap-6 mt-6">
                                    <div>
                                        <div className="text-xl font-bold font-main text-white">
                                            {profile?.public_repos ?? '—'}
                                        </div>
                                        <div className="text-white/40 text-xs font-main uppercase tracking-wide">
                                            Repos
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold font-main text-white">
                                            {totalContributions || '—'}
                                        </div>
                                        <div className="text-white/40 text-xs font-main uppercase tracking-wide">
                                            Contributions
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold font-main text-white">
                                            {profile?.followers ?? '—'}
                                        </div>
                                        <div className="text-white/40 text-xs font-main uppercase tracking-wide">
                                            Followers
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* contribution heatmap */}
                    <div className="md:col-span-2">
                        {/* header stays fixed, outside the scroll container */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-white font-main text-sm font-semibold">
                                Contribution Graph
                            </span>
                            <span className="flex items-center gap-1 ml-auto text-white/50 text-xs font-main">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#39d353] animate-pulse" />
                                Live Data
                            </span>
                        </div>

                        {loading ? (
                            <div className="h-32 bg-white/5 rounded-xl animate-pulse" />
                        ) : (
                            // only this inner area scrolls horizontally
                            <div ref={scrollRef} className="overflow-x-auto pb-1">
                                <div className="flex min-w-[600px]">
                                    {/* day-of-week labels, pinned to the left while weeks scroll */}
                                    <div className="sticky left-0 z-10 flex flex-col justify-between gap-[3px] pr-2 bg-[#0a0612] text-[10px] text-white/30 font-main h-[87px]">
                                        <span>Mon</span>
                                        <span>Wed</span>
                                        <span>Fri</span>
                                    </div>

                                    <div>
                                        {/* month labels scroll together with the grid below them */}
                                        <div className="flex gap-[3px] relative h-3 mb-1 text-[10px] text-white/30 font-main">
                                            {monthLabels.map((m) => (
                                                <span
                                                    key={`${m.label}-${m.index}`}
                                                    className="absolute"
                                                    style={{ left: `${m.index * 13}px` }}
                                                >
                                                    {m.label}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-[3px]">
                                            {weeks.map((week, wi) => (
                                                <div key={wi} className="flex flex-col gap-[3px]">
                                                    {week.map((day, di) => (
                                                        <div
                                                            key={day?.date || di}
                                                            title={day ? `${day.date}: ${day.count} contributions` : ''}
                                                            className={`h-[10px] w-[10px] rounded-[2px] ${levelColor(day?.level ?? 0)}`}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default GitStats