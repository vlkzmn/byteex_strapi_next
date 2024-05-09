interface Block {
  __component: string,
}

export async function getData() {
  try {
    const response = await fetch('http://localhost:1337/api/landing-pages');
    const data = await response.json();
    const blocks = data.data[0].attributes.blocks;
    const result: {[key: string]: any} = {};
    const button = {
      title: data.data[0].attributes.buttonText,
      link: data.data[0].attributes.buttonLink,
      reviewsCount: data.data[0].attributes.reviewsCount,
    };

    blocks.forEach((block: Block) => {
      const key = block.__component.split('.');
      result[key[1]] = {...block, button};
    });

    return result;    
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data.');
  }
}
