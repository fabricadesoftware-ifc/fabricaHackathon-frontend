import { api } from "@/plugins/axios";
import { useToast } from 'vue-toastification';

const toast = useToast()

class DetailEditionService {
  async getAllTeams(idEdition) {
    try {
        const { data } = await api.get(`/rankings/edition/${idEdition}`);

        for (let c = 0; c < data.length; c++) {
          console.log(data[c].team.category)
          data[c] = { id: data[c].id, final_grade: data[c].final_grade, classification: data[c].classification, idTeam: data[c].team.id, name: data[c].team.name, photo_base64_code: data[c].team.photo_base64_team.photo_base64, category: data[c].team?.project?.category }
        };

        return data;
    }
    catch {
        toast.error("Impossível verificar equipes! Verique suas credenciais ou tente mais tarde.")
    }
  };

  async getTeamsByCategories(edition_id, category_id) {
    try {
      const { data } = await api.get(`/rankings/?edition=${edition_id}&category=${category_id}`);
      console.log(data)
      return data;
    }
    catch {
      toast.error("Impossível verificar equipes! Verique suas credenciais ou tente mais tarde.")
      }
  };  

};

export default new DetailEditionService();