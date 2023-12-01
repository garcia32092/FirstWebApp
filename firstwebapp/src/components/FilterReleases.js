const FilterReleases = (releases, { searchTerm, filterType, filterDate, filterFormat }) => {
    return releases.filter(release => {
        const matchesSearchTerm = searchTerm === '' || release.songs.some(song => song.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesFilterType = filterType === '' || release.releaseType === filterType;
        // You can add similar conditions for filterDate and filterFormat

        return matchesSearchTerm && matchesFilterType;
    });
};

export default FilterReleases;
