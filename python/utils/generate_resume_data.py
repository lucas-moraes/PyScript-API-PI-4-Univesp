import pandas as pd

def generate_resume_data(df):
    resume = pd.DataFrame(df, columns=['DISTRITO', 'TIPOESC'])
    resume = resume.groupby('TIPOESC')['TIPOESC'].count()
    return resume.to_json()