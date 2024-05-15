
const TwoExtraSection = () => {
    return (
        <>
            {/* accordion */}
            <div className="my-7">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    Start Your Volunteering Journey Today
                    </div>
                    <div className="collapse-content">
                        <p>Ready to make a difference? Browse our volunteer opportunities, sign up for projects that resonate with you, and start your journey towards positive change. Our Volunteer Management Website is here to support you every step of the way, ensuring your volunteering experience is rewarding and impactful. Join us and be the change you wish to see in the world.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Easy and Secure Volunteer Management
                    </div>
                    <div className="collapse-content">
                        <p>For organizations, our website offers a comprehensive solution for managing volunteer programs. From recruitment to recognition, our tools simplify every aspect of volunteer management. Store volunteer information securely, streamline communication, and generate detailed reports to measure impact and improve your programs.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Join a Community of Changemakers
                    </div>
                    <div className="collapse-content">
                        <p>Volunteering is not just about giving; it's about being part of a community. Our website fosters communication and collaboration among volunteers and coordinators. Engage with fellow volunteers, share your experiences, and stay updated with the latest news and events. Together, we can achieve more.
                        </p>
                    </div>
                </div>
            </div>
            {/* stat */}
            <div className="stats shadow my-10 w-full">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Views</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Mar 1st - April 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </>
    );
};

export default TwoExtraSection;