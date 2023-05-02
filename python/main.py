import pandas as pd
import js
from pyscript import Element
from python.utils.generate_group_data import generate_group_data
from python.utils.generate_yr_data import generate_yr_data
from python.utils.generate_sex_data import generate_sex_data
from python.utils.generate_select_district_data import generate_select_district_data
from python.utils.generate_select_school_type_data import generate_select_school_type_data
from python.utils.generate_select_school_name_data import generate_select_school_name_data

from pyodide.http import open_url
from pyodide.ffi import create_proxy


#url = 'http://dados.prefeitura.sp.gov.br/dataset/b9c5faef-1a61-4814-b89e-bd7a73154ebc/resource/0a422138-92a3-422b-ab71-864d88634a50/download/idadeserieneeracadez22.csv'

js.createObject(create_proxy(globals()), 'python')

class Start:
    url_content = open_url('https://lucas-moraes.github.io/PyScript-API-PI-4-Univesp/base/idadeserieneeracadez22.csv')
    df = pd.read_csv(url_content, encoding="utf-8", delimiter=";")

    def group(self): 
        return generate_group_data(self.df)
    def year(self): 
        return generate_yr_data(self.df)
    def sex(self): 
        return generate_sex_data(self.df)
    def district_array(self): 
        return generate_select_district_data(self.df)
    def school_type_array(self): 
        return generate_select_school_type_data(self.df)
    def school_name_array(self): 
        return generate_select_school_name_data(self.df)

class Select_district:
    url_content = open_url('https://lucas-moraes.github.io/PyScript-API-PI-4-Univesp/base/idadeserieneeracadez22.csv')
    df = pd.read_csv(url_content, encoding="utf-8", delimiter=";")
    df = pd.DataFrame(df)

    def __init__(self, arg):
        self.new = self.df.where(self.df['DISTRITO'] == arg)

    def group(self):
        return generate_group_data(self.new)
    def year(self):        
        return generate_yr_data(self.new)
    def sex(self): 
        return generate_sex_data(self.new)
    def district_array(self): 
        return generate_select_district_data(self.new)
    def school_type_array(self): 
        return generate_select_school_type_data(self.new)
    def school_name_array(self): 
        return generate_select_school_name_data(self.new)

class Select_school_type:
    url_content = open_url('https://lucas-moraes.github.io/PyScript-API-PI-4-Univesp/base/idadeserieneeracadez22.csv')
    df = pd.read_csv(url_content, encoding="utf-8", delimiter=";")
    df = pd.DataFrame(df)

    def __init__(self, arg):
       self.new = self.df.where(self.df['TIPOESC'] == arg)

    def group(self):
        return generate_group_data(self.new)
    def year(self):        
        return generate_yr_data(self.new)
    def sex(self): 
        return generate_sex_data(self.new)
    def district_array(self): 
        return generate_select_district_data(self.new)
    def school_type_array(self): 
        return generate_select_school_type_data(self.new)
    def school_name_array(self): 
        return generate_select_school_name_data(self.new)

class Select_school_name:
    url_content = open_url('https://lucas-moraes.github.io/PyScript-API-PI-4-Univesp/base/idadeserieneeracadez22.csv')
    df = pd.read_csv(url_content, encoding="utf-8", delimiter=";")
    df = pd.DataFrame(df)

    def __init__(self, arg):
        self.new = self.df.where(self.df['NOMESC'] == arg)
        
    def group(self):
        return generate_group_data(self.new)
    def year(self):        
        return generate_yr_data(self.new)
    def sex(self): 
        return generate_sex_data(self.new)
    def district_array(self): 
        return generate_select_district_data(self.new)
    def school_type_array(self): 
        return generate_select_school_type_data(self.new)
    def school_name_array(self): 
        return generate_select_school_name_data(self.new)