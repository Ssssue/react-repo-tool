
import config, { Params } from '../config';

// interface Project {
//   per_page: any;
//   private_token: any;
// }

export default {
  getAllProject(data: Params): Promise<void> {
    return config.doGetPromise(
      '/api/v4/projects',
      data,
    );
  },
  getProjectBranchesWithId(id: number, data: Params): Promise<void> {
    return config.doGetPromise(
      `/api/v4/projects/${id}/repository/branches`,
      data
    );
  },
};