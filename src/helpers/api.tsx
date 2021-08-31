const URL = 'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv ';

/**
 * Retrieve CSV as string and convert to Data object
 * @returns 
 */
export const getData = (): Promise<Data[]> => {
  return fetch(URL)
    .then(res => res.text())
    .then(
      result => result
        .split('\n')
        .slice(1, 50)
        // .slice(1, result.length - 1)
        .map(
          line => {
            const [
              date,
              dataSource,
              campaign,
              clicks,
              impressions] =
              line.split(',');

            return {
              date,
              dataSource,
              campaign,
              clicks,
              impressions,
            };
          }
        ),
      () => []
    )
}