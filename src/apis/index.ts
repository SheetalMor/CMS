import { Application, Request, Response } from 'express';

export class MoviesLobbyAPIs {
   public api(app: Application) {
      app.get('/movies', (req: Request, res: Response) => {
         res.status(200).json({message: "Listing all movies for you"});
      });
      app.get('search?q={query}', (req: Request, res: Response) => {
         res.status(200).json({message:"Are you looking for this movie"});
      });
      app.post('movies', (req: Request, res: Response) => {
         res.status(201).json({message:"Congratulations, a new movie is now added"});
      });
      app.put('movies/:id', (req: Request, res: Response) => {
         res.status(204).json({message:"We have updated this movie for you"});
      });
      app.delete('movies/:id', (req: Request, res: Response) => {
         res.status(204).json({message:"This movie is no longer live"});
      });
   }
}