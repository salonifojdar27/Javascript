

const quotesData = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" }
  ];
  
  class QuoteSlider {
    constructor(data) {
      this.data = data;
      this.index = 0;
      this.intervalId = null;
      this.$quote = $('#quoteText');
      this.$author = $('#quoteAuthor');
      this.init();
    }
  
    init() {
      this.render();
      this.setAutoSlide();
  
      $('#prevBtn').on('click', () => {
        this.prev();
        this.resetInterval();
      });
  
      $('#nextBtn').on('click', () => {
        this.next();
        this.resetInterval();
      });
    }
  
    render() {
      const current = this.data[this.index];
      this.$quote.text(`"${current.text}"`);
      this.$author.text(`— ${current.author}`);
    }
  
    next() {
      this.index = (this.index + 1) % this.data.length;
      this.render();
    }
  
    prev() {
      this.index = (this.index - 1 + this.data.length) % this.data.length;
      this.render();
    }
  
    setAutoSlide() {
      this.intervalId = setInterval(() => this.next(), 2000);
    }
  
    resetInterval() {
      clearInterval(this.intervalId);
      this.setAutoSlide();
    }
  }
  
  // Initialize the slider
  $(document).ready(() => {
    const quoteSlider = new QuoteSlider(quotesData);
  });

  

