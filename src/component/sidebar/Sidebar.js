import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Home</a>
                            <a rel="noopener noreferrer" href="#">Add memeber</a>
                            <a rel="noopener noreferrer" href="#">Add Members money</a>
                            <a rel="noopener noreferrer" href="#">Add Meal</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Student Name</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Add single Meal</a>
                            <a rel="noopener noreferrer" href="#">Add meal cost</a>
                            <a rel="noopener noreferrer" href="#">Add other cost</a>

                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Pages</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Homepage</a>
                            <a rel="noopener noreferrer" href="#">Users</a>
                            <a rel="noopener noreferrer" href="#">Tools</a>
                            <a rel="noopener noreferrer" href="#">Settings</a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Misc</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Tutorials</a>
                            <a rel="noopener noreferrer" href="#">Changelog</a>
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;