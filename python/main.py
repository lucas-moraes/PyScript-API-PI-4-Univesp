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


url = 'http://dados.prefeitura.sp.gov.br/dataset/b9c5faef-1a61-4814-b89e-bd7a73154ebc/resource/0a422138-92a3-422b-ab71-864d88634a50/download/idadeserieneeracadez22.csv'
url_content = open_url(url)
df = pd.read_csv(url_content, encoding="utf-8", delimiter=";")

def function_start():
    group = lambda x: generate_group_data(df)
    year = lambda x: generate_yr_data(df)
    sex = lambda x: generate_sex_data(df)
    district_array = lambda x: generate_select_district_data(df)
    school_type_array = lambda x: generate_select_school_type_data(df)
    school_name_array = lambda x: generate_select_school_name_data(df)
    js.createObject(create_proxy(group), 'group')
    js.createObject(create_proxy(year), 'year')
    js.createObject(create_proxy(sex), 'sex')
    js.createObject(create_proxy(district_array), 'district_array')
    js.createObject(create_proxy(school_type_array), 'school_type_array')
    js.createObject(create_proxy(school_name_array), 'school_name_array')

def function_select_district(distrito):
    new = pd.DataFrame(df)
    new = new.where(df['DISTRITO'] == distrito)
    group = lambda x: generate_group_data(new)
    year = lambda x: generate_yr_data(new)
    sex = lambda x: generate_sex_data(new)
    school_type_array = lambda x: generate_select_school_type_data(df)
    school_name_array = lambda x: generate_select_school_name_data(df)
    js.createObject(create_proxy(group), 'group')
    js.createObject(create_proxy(year), 'year')
    js.createObject(create_proxy(sex), 'sex')
    js.createObject(create_proxy(school_type_array), 'school_type_array')
    js.createObject(create_proxy(school_name_array), 'school_name_array')

def function_select_school_type(school_type):
    new = pd.DataFrame(df)
    new = new.where(df['TIPOESC'] == school_type)
    group = lambda x: generate_group_data(new)
    year = lambda x: generate_yr_data(new)
    sex = lambda x: generate_sex_data(new)
    js.createObject(create_proxy(group), 'group')
    js.createObject(create_proxy(year), 'year')
    js.createObject(create_proxy(sex), 'sex')

def function_select_school_name(school_name):
    new = pd.DataFrame(df)
    new = new.where(df['NOMESC'] == school_name)
    group = lambda x: generate_group_data(new)
    year = lambda x: generate_yr_data(new)
    sex = lambda x: generate_sex_data(new)
    js.createObject(create_proxy(group), 'group')
    js.createObject(create_proxy(year), 'year')
    js.createObject(create_proxy(sex), 'sex')

js.createObject(create_proxy(function_select_district), 'function_select_district')
js.createObject(create_proxy(function_select_school_type), 'function_select_school_type')
js.createObject(create_proxy(function_select_school_name), 'function_select_school_name')

function_start()