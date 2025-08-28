export default function SearchBar() {
    return (
        <div className="relative-flex-1">
            <input 
            id="command" 
            type="search" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Type a command: watch, fix, grow, benchmark..."></input>
        </div>
    );
}