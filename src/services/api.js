import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export async function getImages(q = '', page = 1) {
  const { data } = await axios.get('/api/', {
    params: {
      key: '40670268-b3ad9432c00754cff3407f78c',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q,
      page,
    },
  });
  return data;
}
