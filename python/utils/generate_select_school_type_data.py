import pandas as pd

def generate_select_school_type_data(df):
    school_type = pd.DataFrame(df, columns=['TIPOESC'])
    school_type = school_type.groupby('TIPOESC')['TIPOESC'].count()
    return school_type.to_json()