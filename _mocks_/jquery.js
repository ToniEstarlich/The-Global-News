const $ = jest.fn(() => ({
    ready: jest.fn((callback) => callback()), // Mock $(document).ready()
    owlCarousel: jest.fn(), // Mock owlCarousel plugin
}));

export default $;
